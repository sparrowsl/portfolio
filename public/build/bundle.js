(function (l, r) {
	if (!l || l.getElementById("livereloadscript")) return;
	r = l.createElement("script");
	r.async = 1;
	r.src =
		"//" + (self.location.host || "localhost").split(":")[0] + ":35729/livereload.js?snipver=1";
	r.id = "livereloadscript";
	l.getElementsByTagName("head")[0].appendChild(r);
})(self.document);
var app = (function () {
	"use strict";

	function noop() {}
	const identity = (x) => x;
	function assign(tar, src) {
		// @ts-ignore
		for (const k in src) tar[k] = src[k];
		return tar;
	}
	function add_location(element, file, line, column, char) {
		element.__svelte_meta = {
			loc: { file, line, column, char }
		};
	}
	function run(fn) {
		return fn();
	}
	function blank_object() {
		return Object.create(null);
	}
	function run_all(fns) {
		fns.forEach(run);
	}
	function is_function(thing) {
		return typeof thing === "function";
	}
	function safe_not_equal(a, b) {
		return a != a ? b == b : a !== b || (a && typeof a === "object") || typeof a === "function";
	}
	let src_url_equal_anchor;
	function src_url_equal(element_src, url) {
		if (!src_url_equal_anchor) {
			src_url_equal_anchor = document.createElement("a");
		}
		src_url_equal_anchor.href = url;
		return element_src === src_url_equal_anchor.href;
	}
	function is_empty(obj) {
		return Object.keys(obj).length === 0;
	}
	function validate_store(store, name) {
		if (store != null && typeof store.subscribe !== "function") {
			throw new Error(`'${name}' is not a store with a 'subscribe' method`);
		}
	}
	function subscribe(store, ...callbacks) {
		if (store == null) {
			return noop;
		}
		const unsub = store.subscribe(...callbacks);
		return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
	}
	function component_subscribe(component, store, callback) {
		component.$$.on_destroy.push(subscribe(store, callback));
	}
	function create_slot(definition, ctx, $$scope, fn) {
		if (definition) {
			const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
			return definition[0](slot_ctx);
		}
	}
	function get_slot_context(definition, ctx, $$scope, fn) {
		return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
	}
	function get_slot_changes(definition, $$scope, dirty, fn) {
		if (definition[2] && fn) {
			const lets = definition[2](fn(dirty));
			if ($$scope.dirty === undefined) {
				return lets;
			}
			if (typeof lets === "object") {
				const merged = [];
				const len = Math.max($$scope.dirty.length, lets.length);
				for (let i = 0; i < len; i += 1) {
					merged[i] = $$scope.dirty[i] | lets[i];
				}
				return merged;
			}
			return $$scope.dirty | lets;
		}
		return $$scope.dirty;
	}
	function update_slot_base(
		slot,
		slot_definition,
		ctx,
		$$scope,
		slot_changes,
		get_slot_context_fn
	) {
		if (slot_changes) {
			const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
			slot.p(slot_context, slot_changes);
		}
	}
	function get_all_dirty_from_scope($$scope) {
		if ($$scope.ctx.length > 32) {
			const dirty = [];
			const length = $$scope.ctx.length / 32;
			for (let i = 0; i < length; i++) {
				dirty[i] = -1;
			}
			return dirty;
		}
		return -1;
	}
	function set_store_value(store, ret, value) {
		store.set(value);
		return ret;
	}
	function action_destroyer(action_result) {
		return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
	}

	const is_client = typeof window !== "undefined";
	let now = is_client ? () => window.performance.now() : () => Date.now();
	let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;

	const tasks = new Set();
	function run_tasks(now) {
		tasks.forEach((task) => {
			if (!task.c(now)) {
				tasks.delete(task);
				task.f();
			}
		});
		if (tasks.size !== 0) raf(run_tasks);
	}
	/**
	 * Creates a new task that runs on each raf frame
	 * until it returns a falsy value or is aborted
	 */
	function loop(callback) {
		let task;
		if (tasks.size === 0) raf(run_tasks);
		return {
			promise: new Promise((fulfill) => {
				tasks.add((task = { c: callback, f: fulfill }));
			}),
			abort() {
				tasks.delete(task);
			}
		};
	}
	function append(target, node) {
		target.appendChild(node);
	}
	function get_root_for_style(node) {
		if (!node) return document;
		const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
		if (root && root.host) {
			return root;
		}
		return node.ownerDocument;
	}
	function append_empty_stylesheet(node) {
		const style_element = element("style");
		append_stylesheet(get_root_for_style(node), style_element);
		return style_element.sheet;
	}
	function append_stylesheet(node, style) {
		append(node.head || node, style);
	}
	function insert(target, node, anchor) {
		target.insertBefore(node, anchor || null);
	}
	function detach(node) {
		node.parentNode.removeChild(node);
	}
	function destroy_each(iterations, detaching) {
		for (let i = 0; i < iterations.length; i += 1) {
			if (iterations[i]) iterations[i].d(detaching);
		}
	}
	function element(name) {
		return document.createElement(name);
	}
	function text(data) {
		return document.createTextNode(data);
	}
	function space() {
		return text(" ");
	}
	function empty() {
		return text("");
	}
	function listen(node, event, handler, options) {
		node.addEventListener(event, handler, options);
		return () => node.removeEventListener(event, handler, options);
	}
	function attr(node, attribute, value) {
		if (value == null) node.removeAttribute(attribute);
		else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
	}
	function children(element) {
		return Array.from(element.childNodes);
	}
	function toggle_class(element, name, toggle) {
		element.classList[toggle ? "add" : "remove"](name);
	}
	function custom_event(type, detail, bubbles = false) {
		const e = document.createEvent("CustomEvent");
		e.initCustomEvent(type, bubbles, false, detail);
		return e;
	}

	// we need to store the information for multiple documents because a Svelte application could also contain iframes
	// https://github.com/sveltejs/svelte/issues/3624
	const managed_styles = new Map();
	let active = 0;
	// https://github.com/darkskyapp/string-hash/blob/master/index.js
	function hash(str) {
		let hash = 5381;
		let i = str.length;
		while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
		return hash >>> 0;
	}
	function create_style_information(doc, node) {
		const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
		managed_styles.set(doc, info);
		return info;
	}
	function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
		const step = 16.666 / duration;
		let keyframes = "{\n";
		for (let p = 0; p <= 1; p += step) {
			const t = a + (b - a) * ease(p);
			keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
		}
		const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
		const name = `__svelte_${hash(rule)}_${uid}`;
		const doc = get_root_for_style(node);
		const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
		if (!rules[name]) {
			rules[name] = true;
			stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
		}
		const animation = node.style.animation || "";
		node.style.animation = `${
			animation ? `${animation}, ` : ""
		}${name} ${duration}ms linear ${delay}ms 1 both`;
		active += 1;
		return name;
	}
	function delete_rule(node, name) {
		const previous = (node.style.animation || "").split(", ");
		const next = previous.filter(
			name
				? (anim) => anim.indexOf(name) < 0 // remove specific animation
				: (anim) => anim.indexOf("__svelte") === -1 // remove all Svelte animations
		);
		const deleted = previous.length - next.length;
		if (deleted) {
			node.style.animation = next.join(", ");
			active -= deleted;
			if (!active) clear_rules();
		}
	}
	function clear_rules() {
		raf(() => {
			if (active) return;
			managed_styles.forEach((info) => {
				const { stylesheet } = info;
				let i = stylesheet.cssRules.length;
				while (i--) stylesheet.deleteRule(i);
				info.rules = {};
			});
			managed_styles.clear();
		});
	}

	let current_component;
	function set_current_component(component) {
		current_component = component;
	}
	function get_current_component() {
		if (!current_component) throw new Error("Function called outside component initialization");
		return current_component;
	}
	function onMount(fn) {
		get_current_component().$$.on_mount.push(fn);
	}
	function setContext(key, context) {
		get_current_component().$$.context.set(key, context);
	}
	function getContext(key) {
		return get_current_component().$$.context.get(key);
	}
	function hasContext(key) {
		return get_current_component().$$.context.has(key);
	}
	// TODO figure out if we still want to support
	// shorthand events, or if we want to implement
	// a real bubbling mechanism
	function bubble(component, event) {
		const callbacks = component.$$.callbacks[event.type];
		if (callbacks) {
			// @ts-ignore
			callbacks.slice().forEach((fn) => fn.call(this, event));
		}
	}

	const dirty_components = [];
	const binding_callbacks = [];
	const render_callbacks = [];
	const flush_callbacks = [];
	const resolved_promise = Promise.resolve();
	let update_scheduled = false;
	function schedule_update() {
		if (!update_scheduled) {
			update_scheduled = true;
			resolved_promise.then(flush);
		}
	}
	function tick() {
		schedule_update();
		return resolved_promise;
	}
	function add_render_callback(fn) {
		render_callbacks.push(fn);
	}
	// flush() calls callbacks in this order:
	// 1. All beforeUpdate callbacks, in order: parents before children
	// 2. All bind:this callbacks, in reverse order: children before parents.
	// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
	//    for afterUpdates called during the initial onMount, which are called in
	//    reverse order: children before parents.
	// Since callbacks might update component values, which could trigger another
	// call to flush(), the following steps guard against this:
	// 1. During beforeUpdate, any updated components will be added to the
	//    dirty_components array and will cause a reentrant call to flush(). Because
	//    the flush index is kept outside the function, the reentrant call will pick
	//    up where the earlier call left off and go through all dirty components. The
	//    current_component value is saved and restored so that the reentrant call will
	//    not interfere with the "parent" flush() call.
	// 2. bind:this callbacks cannot trigger new flush() calls.
	// 3. During afterUpdate, any updated components will NOT have their afterUpdate
	//    callback called a second time; the seen_callbacks set, outside the flush()
	//    function, guarantees this behavior.
	const seen_callbacks = new Set();
	let flushidx = 0; // Do *not* move this inside the flush() function
	function flush() {
		const saved_component = current_component;
		do {
			// first, call beforeUpdate functions
			// and update components
			while (flushidx < dirty_components.length) {
				const component = dirty_components[flushidx];
				flushidx++;
				set_current_component(component);
				update(component.$$);
			}
			set_current_component(null);
			dirty_components.length = 0;
			flushidx = 0;
			while (binding_callbacks.length) binding_callbacks.pop()();
			// then, once components are updated, call
			// afterUpdate functions. This may cause
			// subsequent updates...
			for (let i = 0; i < render_callbacks.length; i += 1) {
				const callback = render_callbacks[i];
				if (!seen_callbacks.has(callback)) {
					// ...so guard against infinite loops
					seen_callbacks.add(callback);
					callback();
				}
			}
			render_callbacks.length = 0;
		} while (dirty_components.length);
		while (flush_callbacks.length) {
			flush_callbacks.pop()();
		}
		update_scheduled = false;
		seen_callbacks.clear();
		set_current_component(saved_component);
	}
	function update($$) {
		if ($$.fragment !== null) {
			$$.update();
			run_all($$.before_update);
			const dirty = $$.dirty;
			$$.dirty = [-1];
			$$.fragment && $$.fragment.p($$.ctx, dirty);
			$$.after_update.forEach(add_render_callback);
		}
	}

	let promise;
	function wait() {
		if (!promise) {
			promise = Promise.resolve();
			promise.then(() => {
				promise = null;
			});
		}
		return promise;
	}
	function dispatch(node, direction, kind) {
		node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
	}
	const outroing = new Set();
	let outros;
	function group_outros() {
		outros = {
			r: 0,
			c: [],
			p: outros // parent group
		};
	}
	function check_outros() {
		if (!outros.r) {
			run_all(outros.c);
		}
		outros = outros.p;
	}
	function transition_in(block, local) {
		if (block && block.i) {
			outroing.delete(block);
			block.i(local);
		}
	}
	function transition_out(block, local, detach, callback) {
		if (block && block.o) {
			if (outroing.has(block)) return;
			outroing.add(block);
			outros.c.push(() => {
				outroing.delete(block);
				if (callback) {
					if (detach) block.d(1);
					callback();
				}
			});
			block.o(local);
		}
	}
	const null_transition = { duration: 0 };
	function create_in_transition(node, fn, params) {
		let config = fn(node, params);
		let running = false;
		let animation_name;
		let task;
		let uid = 0;
		function cleanup() {
			if (animation_name) delete_rule(node, animation_name);
		}
		function go() {
			const {
				delay = 0,
				duration = 300,
				easing = identity,
				tick = noop,
				css
			} = config || null_transition;
			if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
			tick(0, 1);
			const start_time = now() + delay;
			const end_time = start_time + duration;
			if (task) task.abort();
			running = true;
			add_render_callback(() => dispatch(node, true, "start"));
			task = loop((now) => {
				if (running) {
					if (now >= end_time) {
						tick(1, 0);
						dispatch(node, true, "end");
						cleanup();
						return (running = false);
					}
					if (now >= start_time) {
						const t = easing((now - start_time) / duration);
						tick(t, 1 - t);
					}
				}
				return running;
			});
		}
		let started = false;
		return {
			start() {
				if (started) return;
				started = true;
				delete_rule(node);
				if (is_function(config)) {
					config = config();
					wait().then(go);
				} else {
					go();
				}
			},
			invalidate() {
				started = false;
			},
			end() {
				if (running) {
					cleanup();
					running = false;
				}
			}
		};
	}

	const globals =
		typeof window !== "undefined"
			? window
			: typeof globalThis !== "undefined"
			? globalThis
			: global;
	function create_component(block) {
		block && block.c();
	}
	function mount_component(component, target, anchor, customElement) {
		const { fragment, on_mount, on_destroy, after_update } = component.$$;
		fragment && fragment.m(target, anchor);
		if (!customElement) {
			// onMount happens before the initial afterUpdate
			add_render_callback(() => {
				const new_on_destroy = on_mount.map(run).filter(is_function);
				if (on_destroy) {
					on_destroy.push(...new_on_destroy);
				} else {
					// Edge case - component was destroyed immediately,
					// most likely as a result of a binding initialising
					run_all(new_on_destroy);
				}
				component.$$.on_mount = [];
			});
		}
		after_update.forEach(add_render_callback);
	}
	function destroy_component(component, detaching) {
		const $$ = component.$$;
		if ($$.fragment !== null) {
			run_all($$.on_destroy);
			$$.fragment && $$.fragment.d(detaching);
			// TODO null out other refs, including component.$$ (but need to
			// preserve final state?)
			$$.on_destroy = $$.fragment = null;
			$$.ctx = [];
		}
	}
	function make_dirty(component, i) {
		if (component.$$.dirty[0] === -1) {
			dirty_components.push(component);
			schedule_update();
			component.$$.dirty.fill(0);
		}
		component.$$.dirty[(i / 31) | 0] |= 1 << i % 31;
	}
	function init(
		component,
		options,
		instance,
		create_fragment,
		not_equal,
		props,
		append_styles,
		dirty = [-1]
	) {
		const parent_component = current_component;
		set_current_component(component);
		const $$ = (component.$$ = {
			fragment: null,
			ctx: null,
			// state
			props,
			update: noop,
			not_equal,
			bound: blank_object(),
			// lifecycle
			on_mount: [],
			on_destroy: [],
			on_disconnect: [],
			before_update: [],
			after_update: [],
			context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
			// everything else
			callbacks: blank_object(),
			dirty,
			skip_bound: false,
			root: options.target || parent_component.$$.root
		});
		append_styles && append_styles($$.root);
		let ready = false;
		$$.ctx = instance
			? instance(component, options.props || {}, (i, ret, ...rest) => {
					const value = rest.length ? rest[0] : ret;
					if ($$.ctx && not_equal($$.ctx[i], ($$.ctx[i] = value))) {
						if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
						if (ready) make_dirty(component, i);
					}
					return ret;
			  })
			: [];
		$$.update();
		ready = true;
		run_all($$.before_update);
		// `false` as a special case of no DOM component
		$$.fragment = create_fragment ? create_fragment($$.ctx) : false;
		if (options.target) {
			if (options.hydrate) {
				const nodes = children(options.target);
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				$$.fragment && $$.fragment.l(nodes);
				nodes.forEach(detach);
			} else {
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				$$.fragment && $$.fragment.c();
			}
			if (options.intro) transition_in(component.$$.fragment);
			mount_component(component, options.target, options.anchor, options.customElement);
			flush();
		}
		set_current_component(parent_component);
	}
	/**
	 * Base class for Svelte components. Used when dev=false.
	 */
	class SvelteComponent {
		$destroy() {
			destroy_component(this, 1);
			this.$destroy = noop;
		}
		$on(type, callback) {
			const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
			callbacks.push(callback);
			return () => {
				const index = callbacks.indexOf(callback);
				if (index !== -1) callbacks.splice(index, 1);
			};
		}
		$set($$props) {
			if (this.$$set && !is_empty($$props)) {
				this.$$.skip_bound = true;
				this.$$set($$props);
				this.$$.skip_bound = false;
			}
		}
	}

	function dispatch_dev(type, detail) {
		document.dispatchEvent(custom_event(type, Object.assign({ version: "3.46.4" }, detail), true));
	}
	function append_dev(target, node) {
		dispatch_dev("SvelteDOMInsert", { target, node });
		append(target, node);
	}
	function insert_dev(target, node, anchor) {
		dispatch_dev("SvelteDOMInsert", { target, node, anchor });
		insert(target, node, anchor);
	}
	function detach_dev(node) {
		dispatch_dev("SvelteDOMRemove", { node });
		detach(node);
	}
	function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
		const modifiers =
			options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
		if (has_prevent_default) modifiers.push("preventDefault");
		if (has_stop_propagation) modifiers.push("stopPropagation");
		dispatch_dev("SvelteDOMAddEventListener", {
			node,
			event,
			handler,
			modifiers
		});
		const dispose = listen(node, event, handler, options);
		return () => {
			dispatch_dev("SvelteDOMRemoveEventListener", {
				node,
				event,
				handler,
				modifiers
			});
			dispose();
		};
	}
	function attr_dev(node, attribute, value) {
		attr(node, attribute, value);
		if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
		else dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
	}
	function set_data_dev(text, data) {
		data = "" + data;
		if (text.wholeText === data) return;
		dispatch_dev("SvelteDOMSetData", { node: text, data });
		text.data = data;
	}
	function validate_each_argument(arg) {
		if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
			let msg = "{#each} only iterates over array-like objects.";
			if (typeof Symbol === "function" && arg && Symbol.iterator in arg) {
				msg += " You can use a spread to convert this iterable into an array.";
			}
			throw new Error(msg);
		}
	}
	function validate_slots(name, slot, keys) {
		for (const slot_key of Object.keys(slot)) {
			if (!~keys.indexOf(slot_key)) {
				console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
			}
		}
	}
	/**
	 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
	 */
	class SvelteComponentDev extends SvelteComponent {
		constructor(options) {
			if (!options || (!options.target && !options.$$inline)) {
				throw new Error("'target' is a required option");
			}
			super();
		}
		$destroy() {
			super.$destroy();
			this.$destroy = () => {
				console.warn("Component was already destroyed"); // eslint-disable-line no-console
			};
		}
		$capture_state() {}
		$inject_state() {}
	}

	const subscriber_queue = [];
	/**
	 * Creates a `Readable` store that allows reading by subscription.
	 * @param value initial value
	 * @param {StartStopNotifier}start start and stop notifications for subscriptions
	 */
	function readable(value, start) {
		return {
			subscribe: writable(value, start).subscribe
		};
	}
	/**
	 * Create a `Writable` store that allows both updating and reading by subscription.
	 * @param {*=}value initial value
	 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
	 */
	function writable(value, start = noop) {
		let stop;
		const subscribers = new Set();
		function set(new_value) {
			if (safe_not_equal(value, new_value)) {
				value = new_value;
				if (stop) {
					// store is ready
					const run_queue = !subscriber_queue.length;
					for (const subscriber of subscribers) {
						subscriber[1]();
						subscriber_queue.push(subscriber, value);
					}
					if (run_queue) {
						for (let i = 0; i < subscriber_queue.length; i += 2) {
							subscriber_queue[i][0](subscriber_queue[i + 1]);
						}
						subscriber_queue.length = 0;
					}
				}
			}
		}
		function update(fn) {
			set(fn(value));
		}
		function subscribe(run, invalidate = noop) {
			const subscriber = [run, invalidate];
			subscribers.add(subscriber);
			if (subscribers.size === 1) {
				stop = start(set) || noop;
			}
			run(value);
			return () => {
				subscribers.delete(subscriber);
				if (subscribers.size === 0) {
					stop();
					stop = null;
				}
			};
		}
		return { set, update, subscribe };
	}

	function p(e, a = !1) {
		return (
			(e = e.slice(e.startsWith("/#") ? 2 : 0, e.endsWith("/*") ? -2 : void 0)),
			e.startsWith("/") || (e = "/" + e),
			e === "/" && (e = ""),
			a && !e.endsWith("/") && (e += "/"),
			e
		);
	}
	function d(e, a) {
		(e = p(e, !0)), (a = p(a, !0));
		let r = [],
			n = {},
			t = !0,
			s = e
				.split("/")
				.map((o) => (o.startsWith(":") ? (r.push(o.slice(1)), "([^\\/]+)") : o))
				.join("\\/"),
			c = a.match(new RegExp(`^${s}$`));
		return (
			c || ((t = !1), (c = a.match(new RegExp(`^${s}`)))),
			c
				? (r.forEach((o, h) => (n[o] = c[h + 1])), { exact: t, params: n, part: c[0].slice(0, -1) })
				: null
		);
	}
	function x(e, a, r) {
		if (r === "") return e;
		if (r[0] === "/") return r;
		let n = (c) => c.split("/").filter((o) => o !== ""),
			t = n(e),
			s = a ? n(a) : [];
		return "/" + s.map((c, o) => t[o]).join("/") + "/" + r;
	}
	function m(e, a, r, n) {
		let t = [a, "data-" + a].reduce((s, c) => {
			let o = e.getAttribute(c);
			return r && e.removeAttribute(c), o === null ? s : o;
		}, !1);
		return !n && t === "" ? !0 : t || n || !1;
	}
	function S(e) {
		let a = e
			.split("&")
			.map((r) => r.split("="))
			.reduce((r, n) => {
				let t = n[0];
				if (!t) return r;
				let s = n.length > 1 ? n[n.length - 1] : !0;
				return (
					typeof s == "string" && s.includes(",") && (s = s.split(",")),
					r[t] === void 0 ? (r[t] = [s]) : r[t].push(s),
					r
				);
			}, {});
		return Object.entries(a).reduce(
			(r, n) => ((r[n[0]] = n[1].length > 1 ? n[1] : n[1][0]), r),
			{}
		);
	}
	function M(e) {
		return Object.entries(e)
			.map(([a, r]) => (r ? (r === !0 ? a : `${a}=${Array.isArray(r) ? r.join(",") : r}`) : null))
			.filter((a) => a)
			.join("&");
	}
	function w(e, a) {
		return e ? a + e : "";
	}
	function k(e) {
		throw new Error("[Tinro] " + e);
	}
	var i = {
		HISTORY: 1,
		HASH: 2,
		MEMORY: 3,
		OFF: 4,
		run(e, a, r, n) {
			return e === this.HISTORY ? a && a() : e === this.HASH ? r && r() : n && n();
		},
		getDefault() {
			return !window || window.location.pathname === "srcdoc" ? this.MEMORY : this.HISTORY;
		}
	};
	var y,
		$,
		H,
		b = "",
		l = E();
	function E() {
		let e = i.getDefault(),
			a,
			r = (c) => (window.onhashchange = window.onpopstate = y = null),
			n = (c) => a && a(R(e)),
			t = (c) => {
				c && (e = c),
					r(),
					e !== i.OFF &&
						i.run(
							e,
							(o) => (window.onpopstate = n),
							(o) => (window.onhashchange = n)
						) &&
						n();
			},
			s = (c) => {
				let o = Object.assign(R(e), c);
				return o.path + w(M(o.query), "?") + w(o.hash, "#");
			};
		return {
			mode: t,
			get: (c) => R(e),
			go(c, o) {
				_(e, c, o), n();
			},
			start(c) {
				(a = c), t();
			},
			stop() {
				(a = null), t(i.OFF);
			},
			set(c) {
				this.go(s(c), !c.path);
			},
			methods() {
				return j(this);
			},
			base: (c) => (b = c)
		};
	}
	function _(e, a, r) {
		!r && ($ = H);
		let n = (t) => history[`${r ? "replace" : "push"}State`]({}, "", t);
		i.run(
			e,
			(t) => n(b + a),
			(t) => n(`#${a}`),
			(t) => (y = a)
		);
	}
	function R(e) {
		let a = window.location,
			r = i.run(
				e,
				(t) => (b ? a.pathname.replace(b, "") : a.pathname) + a.search + a.hash,
				(t) => String(a.hash.slice(1) || "/"),
				(t) => y || "/"
			),
			n = r.match(/^([^?#]+)(?:\?([^#]+))?(?:\#(.+))?$/);
		return (
			(H = r),
			{
				url: r,
				from: $,
				path: n[1] || "",
				query: S(n[2] || ""),
				hash: n[3] || ""
			}
		);
	}
	function j(e) {
		let a = () => e.get().query,
			r = (c) => e.set({ query: c }),
			n = (c) => r(c(a())),
			t = () => e.get().hash,
			s = (c) => e.set({ hash: c });
		return {
			hash: { get: t, set: s, clear: () => s("") },
			query: {
				replace: r,
				clear: () => r(""),
				get(c) {
					return c ? a()[c] : a();
				},
				set(c, o) {
					n((h) => ((h[c] = o), h));
				},
				delete(c) {
					n((o) => (o[c] && delete o[c], o));
				}
			}
		};
	}
	var f = T();
	function T() {
		let { subscribe: e } = writable(l.get(), (a) => {
			l.start(a);
			let r = P(l.go);
			return () => {
				l.stop(), r();
			};
		});
		return {
			subscribe: e,
			goto: l.go,
			params: Q,
			meta: O,
			useHashNavigation: (a) => l.mode(a ? i.HASH : i.HISTORY),
			mode: {
				hash: () => l.mode(i.HASH),
				history: () => l.mode(i.HISTORY),
				memory: () => l.mode(i.MEMORY)
			},
			base: l.base,
			location: l.methods()
		};
	}
	function Y(e) {
		let a,
			r,
			n,
			t,
			s = () => {
				(a = m(e, "href").replace(/^\/#|[?#].*$|\/$/g, "")),
					(r = m(e, "exact", !0)),
					(n = m(e, "active-class", !0, "active"));
			},
			c = () => {
				let o = d(a, t);
				o && ((o.exact && r) || !r) ? e.classList.add(n) : e.classList.remove(n);
			};
		return (
			s(),
			{
				destroy: f.subscribe((o) => {
					(t = o.path), c();
				}),
				update: () => {
					s(), c();
				}
			}
		);
	}
	function P(e) {
		let a = (r) => {
			let n = r.target.closest("a[href]"),
				t = n && m(n, "target", !1, "_self"),
				s = n && m(n, "tinro-ignore"),
				c = r.ctrlKey || r.metaKey || r.altKey || r.shiftKey;
			if (t == "_self" && !s && !c && n) {
				let o = n.getAttribute("href").replace(/^\/#/, "");
				/^\/\/|^#|^[a-zA-Z]+:/.test(o) ||
					(r.preventDefault(),
					e(o.startsWith("/") ? o : n.href.replace(window.location.origin, "")));
			}
		};
		return addEventListener("click", a), () => removeEventListener("click", a);
	}
	function Q() {
		return getContext("tinro").meta.params;
	}
	var g = "tinro",
		K = v({ pattern: "", matched: !0 });
	function q(e) {
		let a = getContext(g) || K;
		(a.exact || a.fallback) &&
			k(
				`${e.fallback ? "<Route fallback>" : `<Route path="${e.path}">`}  can't be inside ${
					a.fallback ? "<Route fallback>" : `<Route path="${a.path || "/"}"> with exact path`
				}`
			);
		let r = e.fallback ? "fallbacks" : "childs",
			n = writable({}),
			t = v({
				fallback: e.fallback,
				parent: a,
				update(s) {
					(t.exact = !s.path.endsWith("/*")),
						(t.pattern = p(`${t.parent.pattern || ""}${s.path}`)),
						(t.redirect = s.redirect),
						(t.firstmatch = s.firstmatch),
						(t.breadcrumb = s.breadcrumb),
						t.match();
				},
				register: () => (
					t.parent[r].add(t),
					async () => {
						t.parent[r].delete(t),
							t.parent.activeChilds.delete(t),
							t.router.un && t.router.un(),
							t.parent.match();
					}
				),
				show: () => {
					e.onShow(), !t.fallback && t.parent.activeChilds.add(t);
				},
				hide: () => {
					e.onHide(), t.parent.activeChilds.delete(t);
				},
				match: async () => {
					t.matched = !1;
					let { path: s, url: c, from: o, query: h } = t.router.location,
						u = d(t.pattern, s);
					if (!t.fallback && u && t.redirect && (!t.exact || (t.exact && u.exact))) {
						let A = x(s, t.parent.pattern, t.redirect);
						return f.goto(A, !0);
					}
					(t.meta = u && {
						from: o,
						url: c,
						query: h,
						match: u.part,
						pattern: t.pattern,
						breadcrumbs: (t.parent.meta && t.parent.meta.breadcrumbs.slice()) || [],
						params: u.params,
						subscribe: n.subscribe
					}),
						t.breadcrumb && t.meta && t.meta.breadcrumbs.push({ name: t.breadcrumb, path: u.part }),
						n.set(t.meta),
						u &&
						!t.fallback &&
						(!t.exact || (t.exact && u.exact)) &&
						(!t.parent.firstmatch || !t.parent.matched)
							? (e.onMeta(t.meta), (t.parent.matched = !0), t.show())
							: t.hide(),
						u && t.showFallbacks();
				}
			});
		return setContext(g, t), onMount(() => t.register()), t;
	}
	function O() {
		return hasContext(g)
			? getContext(g).meta
			: k("meta() function must be run inside any `<Route>` child component only");
	}
	function v(e) {
		let a = {
			router: {},
			exact: !1,
			pattern: null,
			meta: null,
			parent: null,
			fallback: !1,
			redirect: !1,
			firstmatch: !1,
			breadcrumb: null,
			matched: !1,
			childs: new Set(),
			activeChilds: new Set(),
			fallbacks: new Set(),
			async showFallbacks() {
				if (
					!this.fallback &&
					(await tick(),
					(this.childs.size > 0 && this.activeChilds.size == 0) ||
						(this.childs.size == 0 && this.fallbacks.size > 0))
				) {
					let r = this;
					for (; r.fallbacks.size == 0; ) if (((r = r.parent), !r)) return;
					r &&
						r.fallbacks.forEach((n) => {
							if (n.redirect) {
								let t = x("/", n.parent.pattern, n.redirect);
								f.goto(t, !0);
							} else n.show();
						});
				}
			},
			start() {
				this.router.un ||
					(this.router.un = f.subscribe((r) => {
						(this.router.location = r), this.pattern !== null && this.match();
					}));
			},
			match() {
				this.showFallbacks();
			}
		};
		return Object.assign(a, e), a.start(), a;
	}

	/* node_modules/tinro/cmp/Route.svelte generated by Svelte v3.46.4 */

	const get_default_slot_changes = (dirty) => ({
		params: dirty & /*params*/ 2,
		meta: dirty & /*meta*/ 4
	});

	const get_default_slot_context = (ctx) => ({
		params: /*params*/ ctx[1],
		meta: /*meta*/ ctx[2]
	});

	// (33:0) {#if showContent}
	function create_if_block$1(ctx) {
		let current;
		const default_slot_template = /*#slots*/ ctx[9].default;
		const default_slot = create_slot(
			default_slot_template,
			ctx,
			/*$$scope*/ ctx[8],
			get_default_slot_context
		);

		const block = {
			c: function create() {
				if (default_slot) default_slot.c();
			},
			m: function mount(target, anchor) {
				if (default_slot) {
					default_slot.m(target, anchor);
				}

				current = true;
			},
			p: function update(ctx, dirty) {
				if (default_slot) {
					if (default_slot.p && (!current || dirty & /*$$scope, params, meta*/ 262)) {
						update_slot_base(
							default_slot,
							default_slot_template,
							ctx,
							/*$$scope*/ ctx[8],
							!current
								? get_all_dirty_from_scope(/*$$scope*/ ctx[8])
								: get_slot_changes(
										default_slot_template,
										/*$$scope*/ ctx[8],
										dirty,
										get_default_slot_changes
								  ),
							get_default_slot_context
						);
					}
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(default_slot, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(default_slot, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (default_slot) default_slot.d(detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block$1.name,
			type: "if",
			source: "(33:0) {#if showContent}",
			ctx
		});

		return block;
	}

	function create_fragment$a(ctx) {
		let if_block_anchor;
		let current;
		let if_block = /*showContent*/ ctx[0] && create_if_block$1(ctx);

		const block = {
			c: function create() {
				if (if_block) if_block.c();
				if_block_anchor = empty();
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				if (if_block) if_block.m(target, anchor);
				insert_dev(target, if_block_anchor, anchor);
				current = true;
			},
			p: function update(ctx, [dirty]) {
				if (/*showContent*/ ctx[0]) {
					if (if_block) {
						if_block.p(ctx, dirty);

						if (dirty & /*showContent*/ 1) {
							transition_in(if_block, 1);
						}
					} else {
						if_block = create_if_block$1(ctx);
						if_block.c();
						transition_in(if_block, 1);
						if_block.m(if_block_anchor.parentNode, if_block_anchor);
					}
				} else if (if_block) {
					group_outros();

					transition_out(if_block, 1, 1, () => {
						if_block = null;
					});

					check_outros();
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(if_block);
				current = true;
			},
			o: function outro(local) {
				transition_out(if_block);
				current = false;
			},
			d: function destroy(detaching) {
				if (if_block) if_block.d(detaching);
				if (detaching) detach_dev(if_block_anchor);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$a.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$a($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Route", slots, ["default"]);
		let { path = "/*" } = $$props;
		let { fallback = false } = $$props;
		let { redirect = false } = $$props;
		let { firstmatch = false } = $$props;
		let { breadcrumb = null } = $$props;
		let showContent = false;
		let params = {}; /* DEPRECATED */
		let meta = {};

		const route = q({
			fallback,
			onShow() {
				$$invalidate(0, (showContent = true));
			},
			onHide() {
				$$invalidate(0, (showContent = false));
			},
			onMeta(newmeta) {
				$$invalidate(2, (meta = newmeta));
				$$invalidate(1, (params = meta.params)); /* DEPRECATED */
			}
		});

		const writable_props = ["path", "fallback", "redirect", "firstmatch", "breadcrumb"];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<Route> was created with unknown prop '${key}'`);
		});

		$$self.$$set = ($$props) => {
			if ("path" in $$props) $$invalidate(3, (path = $$props.path));
			if ("fallback" in $$props) $$invalidate(4, (fallback = $$props.fallback));
			if ("redirect" in $$props) $$invalidate(5, (redirect = $$props.redirect));
			if ("firstmatch" in $$props) $$invalidate(6, (firstmatch = $$props.firstmatch));
			if ("breadcrumb" in $$props) $$invalidate(7, (breadcrumb = $$props.breadcrumb));
			if ("$$scope" in $$props) $$invalidate(8, ($$scope = $$props.$$scope));
		};

		$$self.$capture_state = () => ({
			createRouteObject: q,
			path,
			fallback,
			redirect,
			firstmatch,
			breadcrumb,
			showContent,
			params,
			meta,
			route
		});

		$$self.$inject_state = ($$props) => {
			if ("path" in $$props) $$invalidate(3, (path = $$props.path));
			if ("fallback" in $$props) $$invalidate(4, (fallback = $$props.fallback));
			if ("redirect" in $$props) $$invalidate(5, (redirect = $$props.redirect));
			if ("firstmatch" in $$props) $$invalidate(6, (firstmatch = $$props.firstmatch));
			if ("breadcrumb" in $$props) $$invalidate(7, (breadcrumb = $$props.breadcrumb));
			if ("showContent" in $$props) $$invalidate(0, (showContent = $$props.showContent));
			if ("params" in $$props) $$invalidate(1, (params = $$props.params));
			if ("meta" in $$props) $$invalidate(2, (meta = $$props.meta));
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*path, redirect, firstmatch, breadcrumb*/ 232) {
				route.update({ path, redirect, firstmatch, breadcrumb });
			}
		};

		return [
			showContent,
			params,
			meta,
			path,
			fallback,
			redirect,
			firstmatch,
			breadcrumb,
			$$scope,
			slots
		];
	}

	class Route extends SvelteComponentDev {
		constructor(options) {
			super(options);

			init(this, options, instance$a, create_fragment$a, safe_not_equal, {
				path: 3,
				fallback: 4,
				redirect: 5,
				firstmatch: 6,
				breadcrumb: 7
			});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Route",
				options,
				id: create_fragment$a.name
			});
		}

		get path() {
			throw new Error(
				"<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set path(value) {
			throw new Error(
				"<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		get fallback() {
			throw new Error(
				"<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set fallback(value) {
			throw new Error(
				"<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		get redirect() {
			throw new Error(
				"<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set redirect(value) {
			throw new Error(
				"<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		get firstmatch() {
			throw new Error(
				"<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set firstmatch(value) {
			throw new Error(
				"<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		get breadcrumb() {
			throw new Error(
				"<Route>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set breadcrumb(value) {
			throw new Error(
				"<Route>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}
	}

	let darkMode = writable(false);
	const projects = readable([
		{
			title: "Codebuddy",
			desc: "A cool, smart, responsive and reactive web based HTML editor.",
			image: "",
			stack: ["HTML", "CSS", "JavaScript", "Svelte"],
			links: {
				live: "https://codebuddy.netlify.app/",
				code: "https://github.com/benjithorpe/codebuddy"
			}
		},
		{
			title: "Countries info",
			desc: "Display information of countries in the world. toggle between light and dark mode.",
			image: "",
			stack: ["HTML", "CSS", "JavaScript", "Svelte"],
			links: {
				live: "http://fem-countries-data.vercel.app/",
				code: "https://github.com/benjithorpe/FEM-countries-data"
			}
		},
		{
			title: "Sivo",
			desc: "An anonymous platform for random post and comments (no authentication required).",
			image: "",
			stack: ["HTML", "CSS", "Python", "Django"],
			links: {
				live: "http://sivos.herokuapp.com/",
				code: "https://github.com/benjithorpe/sivo"
			}
		},
		{
			title: "Advice Generator",
			desc: "Generates random advices. Makes use of the <a href='https://api.adviceslip.com/'>Advice Slip API</a>",
			image: "",
			stack: ["HTML", "CSS", "JavaScript"],
			links: {
				live: "https://fem-advice-generator.netlify.app/",
				code: "https://github.com/benjithorpe/FEM-advice-generator"
			}
		}
	]);

	/* src/components/shared/Icon.svelte generated by Svelte v3.46.4 */

	const file$9 = "src/components/shared/Icon.svelte";

	function create_fragment$9(ctx) {
		let i;
		let mounted;
		let dispose;

		const block = {
			c: function create() {
				i = element("i");
				attr_dev(i, "class", /*iconName*/ ctx[0]);
				add_location(i, file$9, 4, 0, 47);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, i, anchor);

				if (!mounted) {
					dispose = listen_dev(i, "click", /*click_handler*/ ctx[1], false, false, false);
					mounted = true;
				}
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*iconName*/ 1) {
					attr_dev(i, "class", /*iconName*/ ctx[0]);
				}
			},
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(i);
				mounted = false;
				dispose();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$9.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$9($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Icon", slots, []);
		let { iconName } = $$props;
		const writable_props = ["iconName"];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<Icon> was created with unknown prop '${key}'`);
		});

		function click_handler(event) {
			bubble.call(this, $$self, event);
		}

		$$self.$$set = ($$props) => {
			if ("iconName" in $$props) $$invalidate(0, (iconName = $$props.iconName));
		};

		$$self.$capture_state = () => ({ iconName });

		$$self.$inject_state = ($$props) => {
			if ("iconName" in $$props) $$invalidate(0, (iconName = $$props.iconName));
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		return [iconName, click_handler];
	}

	class Icon extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$9, create_fragment$9, safe_not_equal, {
				iconName: 0
			});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Icon",
				options,
				id: create_fragment$9.name
			});

			const { ctx } = this.$$;
			const props = options.props || {};

			if (/*iconName*/ ctx[0] === undefined && !("iconName" in props)) {
				console.warn("<Icon> was created without expected prop 'iconName'");
			}
		}

		get iconName() {
			throw new Error(
				"<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set iconName(value) {
			throw new Error(
				"<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}
	}

	/* src/components/shared/Theme.svelte generated by Svelte v3.46.4 */

	const { console: console_1 } = globals;
	const file$8 = "src/components/shared/Theme.svelte";

	// (8:2) {:else}
	function create_else_block(ctx) {
		let i;

		const block = {
			c: function create() {
				i = element("i");
				attr_dev(i, "class", "ri-moon-fill svelte-er7p3c");
				add_location(i, file$8, 8, 4, 210);
			},
			m: function mount(target, anchor) {
				insert_dev(target, i, anchor);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(i);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_else_block.name,
			type: "else",
			source: "(8:2) {:else}",
			ctx
		});

		return block;
	}

	// (6:2) {#if $darkMode}
	function create_if_block(ctx) {
		let i;

		const block = {
			c: function create() {
				i = element("i");
				attr_dev(i, "class", "ri-sun-line svelte-er7p3c");
				add_location(i, file$8, 6, 4, 168);
			},
			m: function mount(target, anchor) {
				insert_dev(target, i, anchor);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(i);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block.name,
			type: "if",
			source: "(6:2) {#if $darkMode}",
			ctx
		});

		return block;
	}

	function create_fragment$8(ctx) {
		let div;
		let mounted;
		let dispose;

		function select_block_type(ctx, dirty) {
			if (/*$darkMode*/ ctx[0]) return create_if_block;
			return create_else_block;
		}

		let current_block_type = select_block_type(ctx);
		let if_block = current_block_type(ctx);

		const block = {
			c: function create() {
				div = element("div");
				if_block.c();
				attr_dev(div, "class", "theme svelte-er7p3c");
				add_location(div, file$8, 4, 0, 69);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				if_block.m(div, null);

				if (!mounted) {
					dispose = listen_dev(div, "click", /*click_handler*/ ctx[1], false, false, false);
					mounted = true;
				}
			},
			p: function update(ctx, [dirty]) {
				if (current_block_type !== (current_block_type = select_block_type(ctx))) {
					if_block.d(1);
					if_block = current_block_type(ctx);

					if (if_block) {
						if_block.c();
						if_block.m(div, null);
					}
				}
			},
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				if_block.d();
				mounted = false;
				dispose();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$8.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$8($$self, $$props, $$invalidate) {
		let $darkMode;
		validate_store(darkMode, "darkMode");
		component_subscribe($$self, darkMode, ($$value) => $$invalidate(0, ($darkMode = $$value)));
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Theme", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console_1.warn(`<Theme> was created with unknown prop '${key}'`);
		});

		const click_handler = () =>
			console.log(set_store_value(darkMode, ($darkMode = !$darkMode), $darkMode));
		$$self.$capture_state = () => ({ darkMode, $darkMode });
		return [$darkMode, click_handler];
	}

	class Theme extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Theme",
				options,
				id: create_fragment$8.name
			});
		}
	}

	/* src/components/Nav.svelte generated by Svelte v3.46.4 */
	const file$7 = "src/components/Nav.svelte";

	function create_fragment$7(ctx) {
		let section;
		let nav;
		let ul;
		let li0;
		let a0;
		let icon0;
		let t0;
		let small0;
		let t2;
		let li1;
		let a1;
		let icon1;
		let t3;
		let small1;
		let t5;
		let li2;
		let a2;
		let icon2;
		let t6;
		let small2;
		let current;
		let mounted;
		let dispose;

		icon0 = new Icon({
			props: { iconName: "ri-home-4-line" },
			$$inline: true
		});

		icon1 = new Icon({
			props: { iconName: "ri-folder-line" },
			$$inline: true
		});

		icon2 = new Icon({
			props: { iconName: "ri-smartphone-line" },
			$$inline: true
		});

		const block = {
			c: function create() {
				section = element("section");
				nav = element("nav");
				ul = element("ul");
				li0 = element("li");
				a0 = element("a");
				create_component(icon0.$$.fragment);
				t0 = space();
				small0 = element("small");
				small0.textContent = "Home";
				t2 = space();
				li1 = element("li");
				a1 = element("a");
				create_component(icon1.$$.fragment);
				t3 = space();
				small1 = element("small");
				small1.textContent = "Projects";
				t5 = space();
				li2 = element("li");
				a2 = element("a");
				create_component(icon2.$$.fragment);
				t6 = space();
				small2 = element("small");
				small2.textContent = "Contact";
				add_location(small0, file$7, 16, 10, 396);
				attr_dev(a0, "href", "/");
				attr_dev(a0, "exact", "");
				attr_dev(a0, "class", "svelte-1oiwenc");
				add_location(a0, file$7, 14, 8, 307);
				attr_dev(li0, "class", "svelte-1oiwenc");
				add_location(li0, file$7, 13, 6, 293);
				add_location(small1, file$7, 22, 10, 555);
				attr_dev(a1, "href", "/projects");
				attr_dev(a1, "class", "svelte-1oiwenc");
				add_location(a1, file$7, 20, 8, 464);
				attr_dev(li1, "class", "svelte-1oiwenc");
				add_location(li1, file$7, 19, 6, 450);
				add_location(small2, file$7, 29, 10, 774);
				attr_dev(a2, "href", "/contact");
				attr_dev(a2, "class", "svelte-1oiwenc");
				add_location(a2, file$7, 26, 8, 627);
				attr_dev(li2, "class", "svelte-1oiwenc");
				add_location(li2, file$7, 25, 6, 613);
				attr_dev(ul, "class", "svelte-1oiwenc");
				add_location(ul, file$7, 12, 4, 281);
				attr_dev(nav, "class", "svelte-1oiwenc");
				add_location(nav, file$7, 9, 2, 244);
				attr_dev(section, "class", "container svelte-1oiwenc");
				toggle_class(section, "dark", /*$darkMode*/ ctx[0]);
				add_location(section, file$7, 8, 0, 190);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, section, anchor);
				append_dev(section, nav);
				append_dev(nav, ul);
				append_dev(ul, li0);
				append_dev(li0, a0);
				mount_component(icon0, a0, null);
				append_dev(a0, t0);
				append_dev(a0, small0);
				append_dev(ul, t2);
				append_dev(ul, li1);
				append_dev(li1, a1);
				mount_component(icon1, a1, null);
				append_dev(a1, t3);
				append_dev(a1, small1);
				append_dev(ul, t5);
				append_dev(ul, li2);
				append_dev(li2, a2);
				mount_component(icon2, a2, null);
				append_dev(a2, t6);
				append_dev(a2, small2);
				current = true;

				if (!mounted) {
					dispose = [
						action_destroyer(Y.call(null, a0)),
						action_destroyer(Y.call(null, a1)),
						action_destroyer(Y.call(null, a2))
					];

					mounted = true;
				}
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*$darkMode*/ 1) {
					toggle_class(section, "dark", /*$darkMode*/ ctx[0]);
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(icon0.$$.fragment, local);
				transition_in(icon1.$$.fragment, local);
				transition_in(icon2.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(icon0.$$.fragment, local);
				transition_out(icon1.$$.fragment, local);
				transition_out(icon2.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(section);
				destroy_component(icon0);
				destroy_component(icon1);
				destroy_component(icon2);
				mounted = false;
				run_all(dispose);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$7.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$7($$self, $$props, $$invalidate) {
		let $darkMode;
		validate_store(darkMode, "darkMode");
		component_subscribe($$self, darkMode, ($$value) => $$invalidate(0, ($darkMode = $$value)));
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Nav", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<Nav> was created with unknown prop '${key}'`);
		});

		$$self.$capture_state = () => ({
			active: Y,
			darkMode,
			Icon,
			Theme,
			$darkMode
		});
		return [$darkMode];
	}

	class Nav extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Nav",
				options,
				id: create_fragment$7.name
			});
		}
	}

	function cubicOut(t) {
		const f = t - 1.0;
		return f * f * f + 1.0;
	}

	function fly(
		node,
		{ delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}
	) {
		const style = getComputedStyle(node);
		const target_opacity = +style.opacity;
		const transform = style.transform === "none" ? "" : style.transform;
		const od = target_opacity * (1 - opacity);
		return {
			delay,
			duration,
			easing,
			css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
		};
	}

	/* src/components/Skills.svelte generated by Svelte v3.46.4 */

	const file$6 = "src/components/Skills.svelte";

	function create_fragment$6(ctx) {
		let section;
		let div0;
		let h30;
		let t1;
		let p0;
		let t3;
		let div1;
		let h31;
		let t5;
		let p1;
		let t7;
		let div2;
		let h32;
		let t9;
		let p2;

		const block = {
			c: function create() {
				section = element("section");
				div0 = element("div");
				h30 = element("h3");
				h30.textContent = "Languages";
				t1 = space();
				p0 = element("p");
				p0.textContent = "HTML, CSS, JavaScript, Python";
				t3 = space();
				div1 = element("div");
				h31 = element("h3");
				h31.textContent = "Frameworks";
				t5 = space();
				p1 = element("p");
				p1.textContent = "UIkit, Bulma, Svelte, Flask";
				t7 = space();
				div2 = element("div");
				h32 = element("h3");
				h32.textContent = "Tools & Platforms";
				t9 = space();
				p2 = element("p");
				p2.textContent = "Git/GitHub, Slack, Discord, Netlify, Heroku, Markdown";
				attr_dev(h30, "class", " svelte-i5g43w");
				add_location(h30, file$6, 5, 4, 85);
				attr_dev(p0, "class", "svelte-i5g43w");
				add_location(p0, file$6, 6, 4, 118);
				attr_dev(div0, "class", "languages svelte-i5g43w");
				add_location(div0, file$6, 4, 2, 56);
				attr_dev(h31, "class", " svelte-i5g43w");
				add_location(h31, file$6, 10, 4, 222);
				attr_dev(p1, "class", "svelte-i5g43w");
				add_location(p1, file$6, 11, 4, 256);
				attr_dev(div1, "class", "frameworks svelte-i5g43w");
				add_location(div1, file$6, 9, 2, 192);
				attr_dev(h32, "class", " svelte-i5g43w");
				add_location(h32, file$6, 15, 4, 372);
				attr_dev(p2, "class", "svelte-i5g43w");
				add_location(p2, file$6, 16, 4, 417);
				attr_dev(div2, "class", "tools-platforms svelte-i5g43w");
				add_location(div2, file$6, 14, 2, 337);
				attr_dev(section, "class", "svelte-i5g43w");
				add_location(section, file$6, 2, 0, 21);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, section, anchor);
				append_dev(section, div0);
				append_dev(div0, h30);
				append_dev(div0, t1);
				append_dev(div0, p0);
				append_dev(section, t3);
				append_dev(section, div1);
				append_dev(div1, h31);
				append_dev(div1, t5);
				append_dev(div1, p1);
				append_dev(section, t7);
				append_dev(section, div2);
				append_dev(div2, h32);
				append_dev(div2, t9);
				append_dev(div2, p2);
			},
			p: noop,
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(section);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$6.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$6($$self, $$props) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Skills", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<Skills> was created with unknown prop '${key}'`);
		});

		return [];
	}

	class Skills extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Skills",
				options,
				id: create_fragment$6.name
			});
		}
	}

	/* src/pages/Home.svelte generated by Svelte v3.46.4 */
	const file$5 = "src/pages/Home.svelte";

	function create_fragment$5(ctx) {
		let section;
		let header;
		let h1;
		let t0;
		let span;
		let t2;
		let p;
		let t4;
		let ul;
		let li0;
		let a0;
		let icon0;
		let t5;
		let li1;
		let a1;
		let icon1;
		let t6;
		let li2;
		let a2;
		let icon2;
		let t7;
		let li3;
		let a3;
		let icon3;
		let t8;
		let li4;
		let a4;
		let icon4;
		let t9;
		let skills;
		let section_intro;
		let current;

		icon0 = new Icon({
			props: { iconName: "ri-whatsapp-line" },
			$$inline: true
		});

		icon1 = new Icon({
			props: { iconName: "ri-mail-line" },
			$$inline: true
		});

		icon2 = new Icon({
			props: { iconName: "ri-linkedin-fill" },
			$$inline: true
		});

		icon3 = new Icon({
			props: { iconName: "ri-twitter-line" },
			$$inline: true
		});

		icon4 = new Icon({
			props: { iconName: "ri-github-fill" },
			$$inline: true
		});

		skills = new Skills({ $$inline: true });

		const block = {
			c: function create() {
				section = element("section");
				header = element("header");
				h1 = element("h1");
				t0 = text("Hi there, I am ");
				span = element("span");
				span.textContent = "Benjamin Thorpe";
				t2 = space();
				p = element("p");
				p.textContent =
					"A Web Developer by profession, and I build simple, user-friendly,\r\n      responsive, fast and functional websites that work. My aim is to build and\r\n      contribute in building something useful for myself, the community and the\r\n      world as a whole.";
				t4 = space();
				ul = element("ul");
				li0 = element("li");
				a0 = element("a");
				create_component(icon0.$$.fragment);
				t5 = space();
				li1 = element("li");
				a1 = element("a");
				create_component(icon1.$$.fragment);
				t6 = space();
				li2 = element("li");
				a2 = element("a");
				create_component(icon2.$$.fragment);
				t7 = space();
				li3 = element("li");
				a3 = element("a");
				create_component(icon3.$$.fragment);
				t8 = space();
				li4 = element("li");
				a4 = element("a");
				create_component(icon4.$$.fragment);
				t9 = space();
				create_component(skills.$$.fragment);
				attr_dev(span, "class", "svelte-1hq3xdf");
				add_location(span, file$5, 8, 23, 273);
				attr_dev(h1, "class", "svelte-1hq3xdf");
				add_location(h1, file$5, 8, 4, 254);
				attr_dev(p, "class", "info svelte-1hq3xdf");
				add_location(p, file$5, 9, 4, 312);
				attr_dev(a0, "href", "https://wa.me/23299783218");
				attr_dev(a0, "class", " svelte-1hq3xdf");
				add_location(a0, file$5, 18, 8, 647);
				add_location(li0, file$5, 17, 6, 633);
				attr_dev(a1, "href", "mailto:benjaminthorpe19@gmail.com");
				attr_dev(a1, "class", " svelte-1hq3xdf");
				add_location(a1, file$5, 24, 8, 852);
				add_location(li1, file$5, 23, 6, 838);
				attr_dev(a2, "href", "https://www.linkedin.com/in/benjithorpe/");
				attr_dev(a2, "class", "svelte-1hq3xdf");
				add_location(a2, file$5, 29, 8, 1000);
				add_location(li2, file$5, 28, 6, 986);
				attr_dev(a3, "href", "https://twitter.com/benjithorpe1");
				attr_dev(a3, "class", "svelte-1hq3xdf");
				add_location(a3, file$5, 34, 8, 1150);
				add_location(li3, file$5, 33, 6, 1136);
				attr_dev(a4, "href", "https://github.com/benjithorpe");
				attr_dev(a4, "class", "svelte-1hq3xdf");
				add_location(a4, file$5, 39, 8, 1291);
				add_location(li4, file$5, 38, 6, 1277);
				attr_dev(ul, "class", "icons svelte-1hq3xdf");
				add_location(ul, file$5, 16, 4, 607);
				attr_dev(header, "class", "svelte-1hq3xdf");
				add_location(header, file$5, 7, 2, 240);
				attr_dev(section, "class", "container svelte-1hq3xdf");
				add_location(section, file$5, 6, 0, 174);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, section, anchor);
				append_dev(section, header);
				append_dev(header, h1);
				append_dev(h1, t0);
				append_dev(h1, span);
				append_dev(header, t2);
				append_dev(header, p);
				append_dev(header, t4);
				append_dev(header, ul);
				append_dev(ul, li0);
				append_dev(li0, a0);
				mount_component(icon0, a0, null);
				append_dev(ul, t5);
				append_dev(ul, li1);
				append_dev(li1, a1);
				mount_component(icon1, a1, null);
				append_dev(ul, t6);
				append_dev(ul, li2);
				append_dev(li2, a2);
				mount_component(icon2, a2, null);
				append_dev(ul, t7);
				append_dev(ul, li3);
				append_dev(li3, a3);
				mount_component(icon3, a3, null);
				append_dev(ul, t8);
				append_dev(ul, li4);
				append_dev(li4, a4);
				mount_component(icon4, a4, null);
				append_dev(section, t9);
				mount_component(skills, section, null);
				current = true;
			},
			p: noop,
			i: function intro(local) {
				if (current) return;
				transition_in(icon0.$$.fragment, local);
				transition_in(icon1.$$.fragment, local);
				transition_in(icon2.$$.fragment, local);
				transition_in(icon3.$$.fragment, local);
				transition_in(icon4.$$.fragment, local);
				transition_in(skills.$$.fragment, local);

				if (!section_intro) {
					add_render_callback(() => {
						section_intro = create_in_transition(section, fly, {
							y: 200,
							duration: 500
						});
						section_intro.start();
					});
				}

				current = true;
			},
			o: function outro(local) {
				transition_out(icon0.$$.fragment, local);
				transition_out(icon1.$$.fragment, local);
				transition_out(icon2.$$.fragment, local);
				transition_out(icon3.$$.fragment, local);
				transition_out(icon4.$$.fragment, local);
				transition_out(skills.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(section);
				destroy_component(icon0);
				destroy_component(icon1);
				destroy_component(icon2);
				destroy_component(icon3);
				destroy_component(icon4);
				destroy_component(skills);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$5.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$5($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Home", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<Home> was created with unknown prop '${key}'`);
		});

		$$self.$capture_state = () => ({ fly, Icon, Skills });
		return [];
	}

	class Home extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Home",
				options,
				id: create_fragment$5.name
			});
		}
	}

	/* src/components/shared/Image.svelte generated by Svelte v3.46.4 */

	const file$4 = "src/components/shared/Image.svelte";

	function create_fragment$4(ctx) {
		let img;
		let img_src_value;
		let img_width_value;
		let img_height_value;

		const block = {
			c: function create() {
				img = element("img");
				if (!src_url_equal(img.src, (img_src_value = /*src*/ ctx[4])))
					attr_dev(img, "src", img_src_value);
				attr_dev(img, "alt", /*alt*/ ctx[3]);
				attr_dev(img, "width", (img_width_value = /*width*/ ctx[1] ? /*width*/ ctx[1] : ""));
				attr_dev(img, "height", (img_height_value = /*height*/ ctx[2] ? /*height*/ ctx[2] : ""));
				attr_dev(img, "loading", /*loading*/ ctx[0]);
				attr_dev(img, "class", "svelte-16vt9x0");
				add_location(img, file$4, 8, 0, 155);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, img, anchor);
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*src*/ 16 && !src_url_equal(img.src, (img_src_value = /*src*/ ctx[4]))) {
					attr_dev(img, "src", img_src_value);
				}

				if (dirty & /*alt*/ 8) {
					attr_dev(img, "alt", /*alt*/ ctx[3]);
				}

				if (
					dirty & /*width*/ 2 &&
					img_width_value !== (img_width_value = /*width*/ ctx[1] ? /*width*/ ctx[1] : "")
				) {
					attr_dev(img, "width", img_width_value);
				}

				if (
					dirty & /*height*/ 4 &&
					img_height_value !== (img_height_value = /*height*/ ctx[2] ? /*height*/ ctx[2] : "")
				) {
					attr_dev(img, "height", img_height_value);
				}

				if (dirty & /*loading*/ 1) {
					attr_dev(img, "loading", /*loading*/ ctx[0]);
				}
			},
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(img);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$4.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$4($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Image", slots, []);
		let { loading = "eager" } = $$props;
		let { width } = $$props;
		let { height } = $$props;
		let { alt = "an image" } = $$props;
		let { src = "" } = $$props;
		const writable_props = ["loading", "width", "height", "alt", "src"];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<Image> was created with unknown prop '${key}'`);
		});

		$$self.$$set = ($$props) => {
			if ("loading" in $$props) $$invalidate(0, (loading = $$props.loading));
			if ("width" in $$props) $$invalidate(1, (width = $$props.width));
			if ("height" in $$props) $$invalidate(2, (height = $$props.height));
			if ("alt" in $$props) $$invalidate(3, (alt = $$props.alt));
			if ("src" in $$props) $$invalidate(4, (src = $$props.src));
		};

		$$self.$capture_state = () => ({ loading, width, height, alt, src });

		$$self.$inject_state = ($$props) => {
			if ("loading" in $$props) $$invalidate(0, (loading = $$props.loading));
			if ("width" in $$props) $$invalidate(1, (width = $$props.width));
			if ("height" in $$props) $$invalidate(2, (height = $$props.height));
			if ("alt" in $$props) $$invalidate(3, (alt = $$props.alt));
			if ("src" in $$props) $$invalidate(4, (src = $$props.src));
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		return [loading, width, height, alt, src];
	}

	class Image extends SvelteComponentDev {
		constructor(options) {
			super(options);

			init(this, options, instance$4, create_fragment$4, safe_not_equal, {
				loading: 0,
				width: 1,
				height: 2,
				alt: 3,
				src: 4
			});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Image",
				options,
				id: create_fragment$4.name
			});

			const { ctx } = this.$$;
			const props = options.props || {};

			if (/*width*/ ctx[1] === undefined && !("width" in props)) {
				console.warn("<Image> was created without expected prop 'width'");
			}

			if (/*height*/ ctx[2] === undefined && !("height" in props)) {
				console.warn("<Image> was created without expected prop 'height'");
			}
		}

		get loading() {
			throw new Error(
				"<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set loading(value) {
			throw new Error(
				"<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		get width() {
			throw new Error(
				"<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set width(value) {
			throw new Error(
				"<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		get height() {
			throw new Error(
				"<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set height(value) {
			throw new Error(
				"<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		get alt() {
			throw new Error(
				"<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set alt(value) {
			throw new Error(
				"<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		get src() {
			throw new Error(
				"<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set src(value) {
			throw new Error(
				"<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}
	}

	/* src/components/ProjectCard.svelte generated by Svelte v3.46.4 */
	const file$3 = "src/components/ProjectCard.svelte";

	function create_fragment$3(ctx) {
		let div1;
		let picture;
		let div0;
		let image;
		let t0;
		let p0;
		let t1_value = /*project*/ ctx[0].stack.join(", ") + "";
		let t1;
		let t2;
		let caption;
		let h3;
		let t3_value = /*project*/ ctx[0].title + "";
		let t3;
		let t4;
		let p1;
		let raw_value = /*project*/ ctx[0].desc + "";
		let t5;
		let ul;
		let li0;
		let a0;
		let icon0;
		let t6;
		let a0_href_value;
		let t7;
		let li1;
		let a1;
		let icon1;
		let t8;
		let a1_href_value;
		let current;

		image = new Image({
			props: {
				src: "/images/pexels-pixabay-270408.jpg",
				width: true,
				height: true
			},
			$$inline: true
		});

		icon0 = new Icon({
			props: { iconName: "ri-code-s-slash-line" },
			$$inline: true
		});

		icon1 = new Icon({
			props: { iconName: "ri-global-line" },
			$$inline: true
		});

		const block = {
			c: function create() {
				div1 = element("div");
				picture = element("picture");
				div0 = element("div");
				create_component(image.$$.fragment);
				t0 = space();
				p0 = element("p");
				t1 = text(t1_value);
				t2 = space();
				caption = element("caption");
				h3 = element("h3");
				t3 = text(t3_value);
				t4 = space();
				p1 = element("p");
				t5 = space();
				ul = element("ul");
				li0 = element("li");
				a0 = element("a");
				create_component(icon0.$$.fragment);
				t6 = text(" Code");
				t7 = space();
				li1 = element("li");
				a1 = element("a");
				create_component(icon1.$$.fragment);
				t8 = text(" Demo");
				attr_dev(p0, "class", "svelte-79nkwr");
				add_location(p0, file$3, 12, 6, 343);
				attr_dev(div0, "class", "stack svelte-79nkwr");
				add_location(div0, file$3, 8, 4, 176);
				attr_dev(h3, "class", "title svelte-79nkwr");
				add_location(h3, file$3, 16, 6, 441);
				attr_dev(p1, "class", "desc svelte-79nkwr");
				add_location(p1, file$3, 17, 6, 487);
				attr_dev(a0, "href", (a0_href_value = /*project*/ ctx[0].links.code));
				attr_dev(a0, "target", "_blank");
				attr_dev(a0, "class", "svelte-79nkwr");
				add_location(a0, file$3, 21, 10, 589);
				add_location(li0, file$3, 20, 8, 573);
				attr_dev(a1, "href", (a1_href_value = /*project*/ ctx[0].links.live));
				attr_dev(a1, "target", "_blank");
				attr_dev(a1, "class", "svelte-79nkwr");
				add_location(a1, file$3, 26, 10, 752);
				add_location(li1, file$3, 25, 8, 736);
				attr_dev(ul, "class", "project-links svelte-79nkwr");
				add_location(ul, file$3, 19, 6, 537);
				attr_dev(caption, "class", "svelte-79nkwr");
				add_location(caption, file$3, 15, 4, 424);
				attr_dev(picture, "class", "svelte-79nkwr");
				add_location(picture, file$3, 7, 2, 161);
				attr_dev(div1, "class", "project svelte-79nkwr");
				add_location(div1, file$3, 6, 0, 136);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div1, anchor);
				append_dev(div1, picture);
				append_dev(picture, div0);
				mount_component(image, div0, null);
				append_dev(div0, t0);
				append_dev(div0, p0);
				append_dev(p0, t1);
				append_dev(picture, t2);
				append_dev(picture, caption);
				append_dev(caption, h3);
				append_dev(h3, t3);
				append_dev(caption, t4);
				append_dev(caption, p1);
				p1.innerHTML = raw_value;
				append_dev(caption, t5);
				append_dev(caption, ul);
				append_dev(ul, li0);
				append_dev(li0, a0);
				mount_component(icon0, a0, null);
				append_dev(a0, t6);
				append_dev(ul, t7);
				append_dev(ul, li1);
				append_dev(li1, a1);
				mount_component(icon1, a1, null);
				append_dev(a1, t8);
				current = true;
			},
			p: function update(ctx, [dirty]) {
				if (
					(!current || dirty & /*project*/ 1) &&
					t1_value !== (t1_value = /*project*/ ctx[0].stack.join(", ") + "")
				)
					set_data_dev(t1, t1_value);
				if (
					(!current || dirty & /*project*/ 1) &&
					t3_value !== (t3_value = /*project*/ ctx[0].title + "")
				)
					set_data_dev(t3, t3_value);
				if (
					(!current || dirty & /*project*/ 1) &&
					raw_value !== (raw_value = /*project*/ ctx[0].desc + "")
				)
					p1.innerHTML = raw_value;
				if (
					!current ||
					(dirty & /*project*/ 1 &&
						a0_href_value !== (a0_href_value = /*project*/ ctx[0].links.code))
				) {
					attr_dev(a0, "href", a0_href_value);
				}

				if (
					!current ||
					(dirty & /*project*/ 1 &&
						a1_href_value !== (a1_href_value = /*project*/ ctx[0].links.live))
				) {
					attr_dev(a1, "href", a1_href_value);
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(image.$$.fragment, local);
				transition_in(icon0.$$.fragment, local);
				transition_in(icon1.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(image.$$.fragment, local);
				transition_out(icon0.$$.fragment, local);
				transition_out(icon1.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div1);
				destroy_component(image);
				destroy_component(icon0);
				destroy_component(icon1);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$3.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$3($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("ProjectCard", slots, []);
		let { project } = $$props;
		const writable_props = ["project"];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<ProjectCard> was created with unknown prop '${key}'`);
		});

		$$self.$$set = ($$props) => {
			if ("project" in $$props) $$invalidate(0, (project = $$props.project));
		};

		$$self.$capture_state = () => ({ Icon, Image, project });

		$$self.$inject_state = ($$props) => {
			if ("project" in $$props) $$invalidate(0, (project = $$props.project));
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		return [project];
	}

	class ProjectCard extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$3, create_fragment$3, safe_not_equal, {
				project: 0
			});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "ProjectCard",
				options,
				id: create_fragment$3.name
			});

			const { ctx } = this.$$;
			const props = options.props || {};

			if (/*project*/ ctx[0] === undefined && !("project" in props)) {
				console.warn("<ProjectCard> was created without expected prop 'project'");
			}
		}

		get project() {
			throw new Error(
				"<ProjectCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}

		set project(value) {
			throw new Error(
				"<ProjectCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'"
			);
		}
	}

	/* src/pages/Projects.svelte generated by Svelte v3.46.4 */
	const file$2 = "src/pages/Projects.svelte";

	function get_each_context(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[1] = list[i];
		return child_ctx;
	}

	// (12:4) {#each $projects as project}
	function create_each_block(ctx) {
		let projectcard;
		let current;

		projectcard = new ProjectCard({
			props: { project: /*project*/ ctx[1] },
			$$inline: true
		});

		const block = {
			c: function create() {
				create_component(projectcard.$$.fragment);
			},
			m: function mount(target, anchor) {
				mount_component(projectcard, target, anchor);
				current = true;
			},
			p: function update(ctx, dirty) {
				const projectcard_changes = {};
				if (dirty & /*$projects*/ 1) projectcard_changes.project = /*project*/ ctx[1];
				projectcard.$set(projectcard_changes);
			},
			i: function intro(local) {
				if (current) return;
				transition_in(projectcard.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(projectcard.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				destroy_component(projectcard, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_each_block.name,
			type: "each",
			source: "(12:4) {#each $projects as project}",
			ctx
		});

		return block;
	}

	function create_fragment$2(ctx) {
		let section1;
		let h1;
		let t1;
		let section0;
		let section1_intro;
		let current;
		let each_value = /*$projects*/ ctx[0];
		validate_each_argument(each_value);
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
		}

		const out = (i) =>
			transition_out(each_blocks[i], 1, 1, () => {
				each_blocks[i] = null;
			});

		const block = {
			c: function create() {
				section1 = element("section");
				h1 = element("h1");
				h1.textContent = "My Projects";
				t1 = space();
				section0 = element("section");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				attr_dev(h1, "class", "svelte-sf84zm");
				add_location(h1, file$2, 8, 2, 241);
				attr_dev(section0, "class", "projects svelte-sf84zm");
				add_location(section0, file$2, 10, 2, 267);
				attr_dev(section1, "class", "container svelte-sf84zm");
				add_location(section1, file$2, 7, 0, 175);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, section1, anchor);
				append_dev(section1, h1);
				append_dev(section1, t1);
				append_dev(section1, section0);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(section0, null);
				}

				current = true;
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*$projects*/ 1) {
					each_value = /*$projects*/ ctx[0];
					validate_each_argument(each_value);
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
							transition_in(each_blocks[i], 1);
						} else {
							each_blocks[i] = create_each_block(child_ctx);
							each_blocks[i].c();
							transition_in(each_blocks[i], 1);
							each_blocks[i].m(section0, null);
						}
					}

					group_outros();

					for (i = each_value.length; i < each_blocks.length; i += 1) {
						out(i);
					}

					check_outros();
				}
			},
			i: function intro(local) {
				if (current) return;

				for (let i = 0; i < each_value.length; i += 1) {
					transition_in(each_blocks[i]);
				}

				if (!section1_intro) {
					add_render_callback(() => {
						section1_intro = create_in_transition(section1, fly, {
							y: 200,
							duration: 500
						});
						section1_intro.start();
					});
				}

				current = true;
			},
			o: function outro(local) {
				each_blocks = each_blocks.filter(Boolean);

				for (let i = 0; i < each_blocks.length; i += 1) {
					transition_out(each_blocks[i]);
				}

				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(section1);
				destroy_each(each_blocks, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$2.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$2($$self, $$props, $$invalidate) {
		let $projects;
		validate_store(projects, "projects");
		component_subscribe($$self, projects, ($$value) => $$invalidate(0, ($projects = $$value)));
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Projects", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<Projects> was created with unknown prop '${key}'`);
		});

		$$self.$capture_state = () => ({ fly, projects, ProjectCard, $projects });
		return [$projects];
	}

	class Projects extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Projects",
				options,
				id: create_fragment$2.name
			});
		}
	}

	/* src/pages/Contact.svelte generated by Svelte v3.46.4 */
	const file$1 = "src/pages/Contact.svelte";

	function create_fragment$1(ctx) {
		let section;
		let h1;
		let t1;
		let ul;
		let li0;
		let a0;
		let icon0;
		let t2;
		let span0;
		let t4;
		let li1;
		let a1;
		let icon1;
		let t5;
		let span1;
		let t7;
		let li2;
		let a2;
		let icon2;
		let t8;
		let span2;
		let t10;
		let li3;
		let a3;
		let icon3;
		let t11;
		let span3;
		let t13;
		let li4;
		let a4;
		let icon4;
		let t14;
		let span4;
		let section_intro;
		let current;

		icon0 = new Icon({
			props: { iconName: "ri-whatsapp-line" },
			$$inline: true
		});

		icon1 = new Icon({
			props: { iconName: "ri-mail-line" },
			$$inline: true
		});

		icon2 = new Icon({
			props: { iconName: "ri-linkedin-fill" },
			$$inline: true
		});

		icon3 = new Icon({
			props: { iconName: "ri-twitter-line" },
			$$inline: true
		});

		icon4 = new Icon({
			props: { iconName: "ri-github-fill" },
			$$inline: true
		});

		const block = {
			c: function create() {
				section = element("section");
				h1 = element("h1");
				h1.textContent = "Contact";
				t1 = space();
				ul = element("ul");
				li0 = element("li");
				a0 = element("a");
				create_component(icon0.$$.fragment);
				t2 = space();
				span0 = element("span");
				span0.textContent = "WhatsApp";
				t4 = space();
				li1 = element("li");
				a1 = element("a");
				create_component(icon1.$$.fragment);
				t5 = space();
				span1 = element("span");
				span1.textContent = "E-mail";
				t7 = space();
				li2 = element("li");
				a2 = element("a");
				create_component(icon2.$$.fragment);
				t8 = space();
				span2 = element("span");
				span2.textContent = "LinkedIn";
				t10 = space();
				li3 = element("li");
				a3 = element("a");
				create_component(icon3.$$.fragment);
				t11 = space();
				span3 = element("span");
				span3.textContent = "Twitter";
				t13 = space();
				li4 = element("li");
				a4 = element("a");
				create_component(icon4.$$.fragment);
				t14 = space();
				span4 = element("span");
				span4.textContent = "Github";
				attr_dev(h1, "class", "svelte-1yafpqf");
				add_location(h1, file$1, 6, 2, 190);
				attr_dev(span0, "class", "svelte-1yafpqf");
				add_location(span0, file$1, 11, 47, 345);
				attr_dev(a0, "href", "https://wa.me/23299783218");
				attr_dev(a0, "class", " svelte-1yafpqf");
				add_location(a0, file$1, 10, 6, 251);
				add_location(li0, file$1, 9, 4, 239);
				attr_dev(span1, "class", "svelte-1yafpqf");
				add_location(span1, file$1, 17, 43, 563);
				attr_dev(a1, "href", "mailto:benjaminthorpe19@gmail.com");
				attr_dev(a1, "class", " svelte-1yafpqf");
				add_location(a1, file$1, 16, 6, 465);
				add_location(li1, file$1, 15, 4, 453);
				attr_dev(span2, "class", "svelte-1yafpqf");
				add_location(span2, file$1, 22, 47, 723);
				attr_dev(a2, "href", "https://www.linkedin.com/in/benjithorpe/");
				attr_dev(a2, "class", "svelte-1yafpqf");
				add_location(a2, file$1, 21, 6, 623);
				add_location(li2, file$1, 20, 4, 611);
				attr_dev(span3, "class", "svelte-1yafpqf");
				add_location(span3, file$1, 27, 46, 876);
				attr_dev(a3, "href", "https://twitter.com/benjithorpe1");
				attr_dev(a3, "class", "svelte-1yafpqf");
				add_location(a3, file$1, 26, 6, 785);
				add_location(li3, file$1, 25, 4, 773);
				attr_dev(span4, "class", "svelte-1yafpqf");
				add_location(span4, file$1, 32, 45, 1025);
				attr_dev(a4, "href", "https://github.com/benjithorpe");
				attr_dev(a4, "class", "svelte-1yafpqf");
				add_location(a4, file$1, 31, 6, 937);
				add_location(li4, file$1, 30, 4, 925);
				attr_dev(ul, "class", "contacts svelte-1yafpqf");
				add_location(ul, file$1, 8, 2, 212);
				attr_dev(section, "class", "container svelte-1yafpqf");
				add_location(section, file$1, 5, 0, 123);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, section, anchor);
				append_dev(section, h1);
				append_dev(section, t1);
				append_dev(section, ul);
				append_dev(ul, li0);
				append_dev(li0, a0);
				mount_component(icon0, a0, null);
				append_dev(a0, t2);
				append_dev(a0, span0);
				append_dev(ul, t4);
				append_dev(ul, li1);
				append_dev(li1, a1);
				mount_component(icon1, a1, null);
				append_dev(a1, t5);
				append_dev(a1, span1);
				append_dev(ul, t7);
				append_dev(ul, li2);
				append_dev(li2, a2);
				mount_component(icon2, a2, null);
				append_dev(a2, t8);
				append_dev(a2, span2);
				append_dev(ul, t10);
				append_dev(ul, li3);
				append_dev(li3, a3);
				mount_component(icon3, a3, null);
				append_dev(a3, t11);
				append_dev(a3, span3);
				append_dev(ul, t13);
				append_dev(ul, li4);
				append_dev(li4, a4);
				mount_component(icon4, a4, null);
				append_dev(a4, t14);
				append_dev(a4, span4);
				current = true;
			},
			p: noop,
			i: function intro(local) {
				if (current) return;
				transition_in(icon0.$$.fragment, local);
				transition_in(icon1.$$.fragment, local);
				transition_in(icon2.$$.fragment, local);
				transition_in(icon3.$$.fragment, local);
				transition_in(icon4.$$.fragment, local);

				if (!section_intro) {
					add_render_callback(() => {
						section_intro = create_in_transition(section, fly, {
							y: -200,
							duration: 700
						});
						section_intro.start();
					});
				}

				current = true;
			},
			o: function outro(local) {
				transition_out(icon0.$$.fragment, local);
				transition_out(icon1.$$.fragment, local);
				transition_out(icon2.$$.fragment, local);
				transition_out(icon3.$$.fragment, local);
				transition_out(icon4.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(section);
				destroy_component(icon0);
				destroy_component(icon1);
				destroy_component(icon2);
				destroy_component(icon3);
				destroy_component(icon4);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$1.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$1($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("Contact", slots, []);
		const writable_props = [];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<Contact> was created with unknown prop '${key}'`);
		});

		$$self.$capture_state = () => ({ fly, Icon });
		return [];
	}

	class Contact extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Contact",
				options,
				id: create_fragment$1.name
			});
		}
	}

	/* src/App.svelte generated by Svelte v3.46.4 */
	const file = "src/App.svelte";

	// (14:1) <Route path="/">
	function create_default_slot_3(ctx) {
		let home;
		let current;
		home = new Home({ $$inline: true });

		const block = {
			c: function create() {
				create_component(home.$$.fragment);
			},
			m: function mount(target, anchor) {
				mount_component(home, target, anchor);
				current = true;
			},
			i: function intro(local) {
				if (current) return;
				transition_in(home.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(home.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				destroy_component(home, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot_3.name,
			type: "slot",
			source: '(14:1) <Route path=\\"/\\">',
			ctx
		});

		return block;
	}

	// (18:1) <Route path="/projects">
	function create_default_slot_2(ctx) {
		let projects;
		let current;
		projects = new Projects({ $$inline: true });

		const block = {
			c: function create() {
				create_component(projects.$$.fragment);
			},
			m: function mount(target, anchor) {
				mount_component(projects, target, anchor);
				current = true;
			},
			i: function intro(local) {
				if (current) return;
				transition_in(projects.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(projects.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				destroy_component(projects, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot_2.name,
			type: "slot",
			source: '(18:1) <Route path=\\"/projects\\">',
			ctx
		});

		return block;
	}

	// (22:1) <Route path="/contact">
	function create_default_slot_1(ctx) {
		let contact;
		let current;
		contact = new Contact({ $$inline: true });

		const block = {
			c: function create() {
				create_component(contact.$$.fragment);
			},
			m: function mount(target, anchor) {
				mount_component(contact, target, anchor);
				current = true;
			},
			i: function intro(local) {
				if (current) return;
				transition_in(contact.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(contact.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				destroy_component(contact, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot_1.name,
			type: "slot",
			source: '(22:1) <Route path=\\"/contact\\">',
			ctx
		});

		return block;
	}

	// (26:1) <Route fallback redirect="/">
	function create_default_slot(ctx) {
		let home;
		let current;
		home = new Home({ $$inline: true });

		const block = {
			c: function create() {
				create_component(home.$$.fragment);
			},
			m: function mount(target, anchor) {
				mount_component(home, target, anchor);
				current = true;
			},
			i: function intro(local) {
				if (current) return;
				transition_in(home.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(home.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				destroy_component(home, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot.name,
			type: "slot",
			source: '(26:1) <Route fallback redirect=\\"/\\">',
			ctx
		});

		return block;
	}

	function create_fragment(ctx) {
		let main;
		let route0;
		let t0;
		let route1;
		let t1;
		let route2;
		let t2;
		let route3;
		let t3;
		let nav;
		let current;

		route0 = new Route({
			props: {
				path: "/",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

		route1 = new Route({
			props: {
				path: "/projects",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

		route2 = new Route({
			props: {
				path: "/contact",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

		route3 = new Route({
			props: {
				fallback: true,
				redirect: "/",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

		nav = new Nav({ $$inline: true });

		const block = {
			c: function create() {
				main = element("main");
				create_component(route0.$$.fragment);
				t0 = space();
				create_component(route1.$$.fragment);
				t1 = space();
				create_component(route2.$$.fragment);
				t2 = space();
				create_component(route3.$$.fragment);
				t3 = space();
				create_component(nav.$$.fragment);
				attr_dev(main, "class", " svelte-37ip70");
				add_location(main, file, 12, 0, 344);
			},
			l: function claim(nodes) {
				throw new Error(
					"options.hydrate only works if the component was compiled with the `hydratable: true` option"
				);
			},
			m: function mount(target, anchor) {
				insert_dev(target, main, anchor);
				mount_component(route0, main, null);
				append_dev(main, t0);
				mount_component(route1, main, null);
				append_dev(main, t1);
				mount_component(route2, main, null);
				append_dev(main, t2);
				mount_component(route3, main, null);
				insert_dev(target, t3, anchor);
				mount_component(nav, target, anchor);
				current = true;
			},
			p: function update(ctx, [dirty]) {
				const route0_changes = {};

				if (dirty & /*$$scope*/ 1) {
					route0_changes.$$scope = { dirty, ctx };
				}

				route0.$set(route0_changes);
				const route1_changes = {};

				if (dirty & /*$$scope*/ 1) {
					route1_changes.$$scope = { dirty, ctx };
				}

				route1.$set(route1_changes);
				const route2_changes = {};

				if (dirty & /*$$scope*/ 1) {
					route2_changes.$$scope = { dirty, ctx };
				}

				route2.$set(route2_changes);
				const route3_changes = {};

				if (dirty & /*$$scope*/ 1) {
					route3_changes.$$scope = { dirty, ctx };
				}

				route3.$set(route3_changes);
			},
			i: function intro(local) {
				if (current) return;
				transition_in(route0.$$.fragment, local);
				transition_in(route1.$$.fragment, local);
				transition_in(route2.$$.fragment, local);
				transition_in(route3.$$.fragment, local);
				transition_in(nav.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(route0.$$.fragment, local);
				transition_out(route1.$$.fragment, local);
				transition_out(route2.$$.fragment, local);
				transition_out(route3.$$.fragment, local);
				transition_out(nav.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(main);
				destroy_component(route0);
				destroy_component(route1);
				destroy_component(route2);
				destroy_component(route3);
				if (detaching) detach_dev(t3);
				destroy_component(nav, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance($$self, $$props, $$invalidate) {
		let { $$slots: slots = {}, $$scope } = $$props;
		validate_slots("App", slots, []);
		f.subscribe((_) => window.scrollTo(0, 0));
		const writable_props = [];

		Object.keys($$props).forEach((key) => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
				console.warn(`<App> was created with unknown prop '${key}'`);
		});

		$$self.$capture_state = () => ({
			Route,
			router: f,
			Nav,
			Home,
			Projects,
			Contact
		});

		return [];
	}

	class App extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance, create_fragment, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "App",
				options,
				id: create_fragment.name
			});
		}
	}

	const app = new App({ target: document.body });

	return app;
})();
//# sourceMappingURL=bundle.js.map
