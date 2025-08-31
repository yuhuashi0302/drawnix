import { jsx as a, jsxs as k, Fragment as ke } from "react/jsx-runtime";
import { useBoard as ee, useListRender as Yo, Wrapper as ui, Board as di } from "@plait-board/react-board";
import { getSelectedElements as Ie, getHitElementByPoint as fi, toViewBoxPoint as dt, toHostPoint as ft, isSelectionMoving as hi, isDragging as Cn, toImage as Xo, IS_APPLE as mi, IS_MAC as Jo, ThemeColorMode as ze, DEFAULT_COLOR as Ht, BoardTransforms as J, PlaitBoard as _, PlaitPointerType as ye, ATTACHED_ELEMENT_CLASS_NAME as Ae, toFixed as Qo, isNullOrUndefined as In, MERGING as nr, PlaitHistoryBoard as ea, Transforms as Fe, getRectangleByElements as ta, RectangleClient as tt, toScreenPointFromHostPoint as rr, toHostPointFromViewBoxPoint as ir, isMovingElements as bn, duplicateElements as na, deleteFragment as ra, rotateAntiPointsByElement as ia, isPointInPolygon as oa, idCreator as aa, setStrokeLinecap as sa, ACTIVE_STROKE_WIDTH as la, distanceBetweenPointAndPoint as gi, addOrCreateClipboardContext as ca, WritableClipboardType as ua, throttleRAF as pi, PlaitElement as da, CoreTransforms as fa, isPencilEvent as or, IS_IOS as ha, getViewportOrigination as vi, PlaitGroupElement as ma, WritableClipboardOperationType as wi } from "@plait/core";
import * as U from "react";
import Ue, { forwardRef as yi, useState as F, useRef as xe, useEffect as ie, createContext as Rn, useMemo as ga, useContext as Ct, useCallback as ar, Component as pa, useDeferredValue as Ci } from "react";
import { getElementOfFocusedImage as bi, isResizing as ki, setCreationMode as de, BoardCreationMode as fe, PropertyTransforms as bt, StrokeStyle as Yt, getFirstTextEditor as va, Generator as wa, CommonElementFlavour as ya, createActiveGenerator as Ca, hasResizeHandle as ba, isDrawingMode as xi, buildClipboardData as ka, insertClipboardData as xa, withGroup as Ei } from "@plait/common";
import { DrawTransforms as Ea, BasicShapes as le, FlowchartSymbols as Oi, ArrowLineShape as We, PlaitDrawElement as Q, isClosedDrawElement as Si, isClosedCustomGeometry as Nn, getFillByElement as Oa, getStrokeColorByElement as Pi, getMemorizeKey as kt, isDrawElementsIncludeText as Sa, isRectangleHitRotatedPoints as Pa, isClosedPoints as La, isHitPolyLine as sr, DefaultDrawStyle as Ma, getStrokeWidthByElement as Da, getHitDrawElement as Ta, WithDrawPluginKey as _a, withDraw as Li } from "@plait/draw";
import { WithMindPluginKey as Fa, MindElement as Ee, MindTransforms as lr, isHitImage as Ia, MindPointerType as kn, getFillByElement as Ra, getStrokeColorByElement as Mi, withMind as Di, MindThemeColors as Ti } from "@plait/mind";
import Na from "mobile-detect";
import Aa from "react-dom";
import T from "classnames";
import { useMergeRefs as Ut, FloatingPortal as _i, FloatingFocusManager as Fi, useFloating as Wt, offset as An, flip as Bn, shift as Ba, autoUpdate as za, useClick as Ii, useDismiss as Ri, useRole as Ni, useInteractions as Ai, FloatingOverlay as ja, useId as Bi } from "@floating-ui/react";
import { getTextMarksByElement as zn, TextTransforms as xn, LinkEditor as Je } from "@plait/text-plugins";
import { throttle as Ha } from "lodash";
var Lt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function iu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ye = {}, cr;
function Ua() {
  if (cr) return Ye;
  cr = 1;
  var e = Aa;
  if (process.env.NODE_ENV === "production")
    Ye.createRoot = e.createRoot, Ye.hydrateRoot = e.hydrateRoot;
  else {
    var t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Ye.createRoot = function(n, r) {
      t.usingClientEntryPoint = !0;
      try {
        return e.createRoot(n, r);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    }, Ye.hydrateRoot = function(n, r, i) {
      t.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(n, r, i);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    };
  }
  return Ye;
}
var zi = Ua();
const ur = (e) => /* @__PURE__ */ a(
  "span",
  {
    className: "mind-node-emoji",
    style: { fontSize: `${e.fontSize}px` },
    children: e.emojiItem.name
  }
), Wa = (e) => {
  const t = e;
  return e.setPluginOptions(
    Fa,
    {
      emojiPadding: 0,
      spaceBetweenEmojis: 4
    }
  ), t.renderEmoji = (n, r) => {
    const i = document.createElement("span");
    n.appendChild(i);
    const o = zi.createRoot(i);
    o.render(/* @__PURE__ */ a(ur, { ...r }));
    let s = { ...r };
    return {
      destroy: () => {
        setTimeout(() => {
          o.unmount();
        }, 0);
      },
      update: (c) => {
        s = { ...s, ...c }, o.render(/* @__PURE__ */ a(ur, { ...s }));
      }
    };
  }, t;
}, dr = (e) => {
  const t = {
    src: e.imageItem.url,
    draggable: !1,
    width: "100%"
  };
  return /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a(
    "img",
    {
      ...t,
      className: T("image-origin", {
        "image-origin--focus": e.isFocus
      })
    }
  ) });
};
var nt = /* @__PURE__ */ ((e) => (e.COPY = "copy", e.PASTE = "paste", e.CUT = "cut", e.KEYDOWN = "keydown", e.KEYUP = "keyup", e.MOUSE_MOVE = "mousemove", e.RESIZE = "resize", e.UNLOAD = "unload", e.FOCUS = "focus", e.BLUR = "blur", e.DRAG_OVER = "dragover", e.DROP = "drop", e.GESTURE_END = "gestureend", e.BEFORE_UNLOAD = "beforeunload", e.GESTURE_START = "gesturestart", e.GESTURE_CHANGE = "gesturechange", e.POINTER_MOVE = "pointermove", e.POINTER_DOWN = "pointerdown", e.POINTER_UP = "pointerup", e.STATE_CHANGE = "statechange", e.WHEEL = "wheel", e.TOUCH_START = "touchstart", e.TOUCH_END = "touchend", e.HASHCHANGE = "hashchange", e.VISIBILITY_CHANGE = "visibilitychange", e.SCROLL = "scroll", e.MENU_ITEM_SELECT = "menu.itemSelect", e.MESSAGE = "message", e.FULLSCREENCHANGE = "fullscreenchange", e))(nt || {});
const jn = {
  svg: "image/svg+xml",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  bmp: "image/bmp",
  ico: "image/x-icon",
  avif: "image/avif",
  jfif: "image/jfif"
}, Hn = {
  json: "application/json",
  drawnix: "application/vnd.drawnix+json",
  // image
  ...jn
}, qa = {
  drawnix: 1
}, Un = (() => {
  if (typeof self > "u") return !1;
  if ("top" in self && self !== top) try {
    top.window.document._ = 0;
  } catch {
    return !1;
  }
  return "showOpenFilePicker" in self;
})(), Ka = Un ? Promise.resolve().then(function() {
  return Xa;
}) : Promise.resolve().then(function() {
  return rs;
});
async function $a(...e) {
  return (await Ka).default(...e);
}
Un ? Promise.resolve().then(function() {
  return Qa;
}) : Promise.resolve().then(function() {
  return os;
});
const Za = Un ? Promise.resolve().then(function() {
  return ts;
}) : Promise.resolve().then(function() {
  return ss;
});
async function Ga(...e) {
  return (await Za).default(...e);
}
const Va = async (e) => {
  const t = await e.getFile();
  return t.handle = e, t;
};
var Ya = async (e = [{}]) => {
  Array.isArray(e) || (e = [e]);
  const t = [];
  e.forEach((i, o) => {
    t[o] = { description: i.description || "Files", accept: {} }, i.mimeTypes ? i.mimeTypes.map((s) => {
      t[o].accept[s] = i.extensions || [];
    }) : t[o].accept["*/*"] = i.extensions || [];
  });
  const n = await window.showOpenFilePicker({ id: e[0].id, startIn: e[0].startIn, types: t, multiple: e[0].multiple || !1, excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1 }), r = await Promise.all(n.map(Va));
  return e[0].multiple ? r : r[0];
}, Xa = { __proto__: null, default: Ya };
function _t(e) {
  function t(n) {
    if (Object(n) !== n) return Promise.reject(new TypeError(n + " is not an object."));
    var r = n.done;
    return Promise.resolve(n.value).then(function(i) {
      return { value: i, done: r };
    });
  }
  return _t = function(n) {
    this.s = n, this.n = n.next;
  }, _t.prototype = { s: null, n: null, next: function() {
    return t(this.n.apply(this.s, arguments));
  }, return: function(n) {
    var r = this.s.return;
    return r === void 0 ? Promise.resolve({ value: n, done: !0 }) : t(r.apply(this.s, arguments));
  }, throw: function(n) {
    var r = this.s.return;
    return r === void 0 ? Promise.reject(n) : t(r.apply(this.s, arguments));
  } }, new _t(e);
}
const ji = async (e, t, n = e.name, r) => {
  const i = [], o = [];
  var s, l = !1, c = !1;
  try {
    for (var u, d = function(h) {
      var f, m, p, w = 2;
      for (typeof Symbol < "u" && (m = Symbol.asyncIterator, p = Symbol.iterator); w--; ) {
        if (m && (f = h[m]) != null) return f.call(h);
        if (p && (f = h[p]) != null) return new _t(f.call(h));
        m = "@@asyncIterator", p = "@@iterator";
      }
      throw new TypeError("Object is not async iterable");
    }(e.values()); l = !(u = await d.next()).done; l = !1) {
      const h = u.value, f = `${n}/${h.name}`;
      h.kind === "file" ? o.push(h.getFile().then((m) => (m.directoryHandle = e, m.handle = h, Object.defineProperty(m, "webkitRelativePath", { configurable: !0, enumerable: !0, get: () => f })))) : h.kind !== "directory" || !t || r && r(h) || i.push(ji(h, t, f, r));
    }
  } catch (h) {
    c = !0, s = h;
  } finally {
    try {
      l && d.return != null && await d.return();
    } finally {
      if (c) throw s;
    }
  }
  return [...(await Promise.all(i)).flat(), ...await Promise.all(o)];
};
var Ja = async (e = {}) => {
  e.recursive = e.recursive || !1, e.mode = e.mode || "read";
  const t = await window.showDirectoryPicker({ id: e.id, startIn: e.startIn, mode: e.mode });
  return (await (await t.values()).next()).done ? [t] : ji(t, e.recursive, void 0, e.skipDirectory);
}, Qa = { __proto__: null, default: Ja }, es = async (e, t = [{}], n = null, r = !1, i = null) => {
  Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
  const o = [];
  let s = null;
  if (e instanceof Blob && e.type ? s = e.type : e.headers && e.headers.get("content-type") && (s = e.headers.get("content-type")), t.forEach((u, d) => {
    o[d] = { description: u.description || "Files", accept: {} }, u.mimeTypes ? (d === 0 && s && u.mimeTypes.push(s), u.mimeTypes.map((h) => {
      o[d].accept[h] = u.extensions || [];
    })) : s ? o[d].accept[s] = u.extensions || [] : o[d].accept["*/*"] = u.extensions || [];
  }), n) try {
    await n.getFile();
  } catch (u) {
    if (n = null, r) throw u;
  }
  const l = n || await window.showSaveFilePicker({ suggestedName: t[0].fileName, id: t[0].id, startIn: t[0].startIn, types: o, excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1 });
  !n && i && i(l);
  const c = await l.createWritable();
  return "stream" in e ? (await e.stream().pipeTo(c), l) : "body" in e ? (await e.body.pipeTo(c), l) : (await c.write(await e), await c.close(), l);
}, ts = { __proto__: null, default: es }, ns = async (e = [{}]) => (Array.isArray(e) || (e = [e]), new Promise((t, n) => {
  const r = document.createElement("input");
  r.type = "file";
  const i = [...e.map((c) => c.mimeTypes || []), ...e.map((c) => c.extensions || [])].join();
  r.multiple = e[0].multiple || !1, r.accept = i || "", r.style.display = "none", document.body.append(r);
  const o = (c) => {
    typeof s == "function" && s(), t(c);
  }, s = e[0].legacySetup && e[0].legacySetup(o, () => s(n), r), l = () => {
    window.removeEventListener("focus", l), r.remove();
  };
  r.addEventListener("click", () => {
    window.addEventListener("focus", l);
  }), r.addEventListener("change", () => {
    window.removeEventListener("focus", l), r.remove(), o(r.multiple ? Array.from(r.files) : r.files[0]);
  }), "showPicker" in HTMLInputElement.prototype ? r.showPicker() : r.click();
})), rs = { __proto__: null, default: ns }, is = async (e = [{}]) => (Array.isArray(e) || (e = [e]), e[0].recursive = e[0].recursive || !1, new Promise((t, n) => {
  const r = document.createElement("input");
  r.type = "file", r.webkitdirectory = !0;
  const i = (s) => {
    typeof o == "function" && o(), t(s);
  }, o = e[0].legacySetup && e[0].legacySetup(i, () => o(n), r);
  r.addEventListener("change", () => {
    let s = Array.from(r.files);
    e[0].recursive ? e[0].recursive && e[0].skipDirectory && (s = s.filter((l) => l.webkitRelativePath.split("/").every((c) => !e[0].skipDirectory({ name: c, kind: "directory" })))) : s = s.filter((l) => l.webkitRelativePath.split("/").length === 2), i(s);
  }), "showPicker" in HTMLInputElement.prototype ? r.showPicker() : r.click();
})), os = { __proto__: null, default: is }, as = async (e, t = {}) => {
  Array.isArray(t) && (t = t[0]);
  const n = document.createElement("a");
  let r = e;
  "body" in e && (r = await async function(s, l) {
    const c = s.getReader(), u = new ReadableStream({ start: (f) => async function m() {
      return c.read().then(({ done: p, value: w }) => {
        if (!p) return f.enqueue(w), m();
        f.close();
      });
    }() }), d = new Response(u), h = await d.blob();
    return c.releaseLock(), new Blob([h], { type: l });
  }(e.body, e.headers.get("content-type"))), n.download = t.fileName || "Untitled", n.href = URL.createObjectURL(await r);
  const i = () => {
    typeof o == "function" && o();
  }, o = t.legacySetup && t.legacySetup(i, () => o(), n);
  return n.addEventListener("click", () => {
    setTimeout(() => URL.revokeObjectURL(n.href), 3e4), i();
  }), n.click(), null;
}, ss = { __proto__: null, default: as };
const Hi = (e) => {
  var r, i;
  const t = (r = e.extensions) == null ? void 0 : r.reduce((o, s) => (o.push(Hn[s]), o), []), n = (i = e.extensions) == null ? void 0 : i.reduce((o, s) => s === "jpg" ? o.concat(".jpg", ".jpeg") : o.concat(`.${s}`), []);
  return $a({
    description: e.description,
    extensions: n,
    mimeTypes: t,
    multiple: e.multiple ?? !1
  });
}, ls = (e, t) => Ga(
  e,
  {
    fileName: `${t.name}.${t.extension}`,
    description: t.description,
    extensions: [`.${t.extension}`]
  },
  t.fileHandle
);
var Wn = /* @__PURE__ */ ((e) => (e.drawnix = "drawnix", e))(Wn || {});
const cs = () => (/* @__PURE__ */ new Date()).getTime().toString(), Ui = async (e, t = cs()) => {
  const n = fs(e), r = new Blob([n], {
    type: Hn.drawnix
  });
  return { fileHandle: await ls(r, {
    name: t,
    extension: "drawnix",
    description: "Drawnix file"
  }) };
}, us = async (e) => {
  const t = await Hi({
    description: "Drawnix files"
    // ToDo: Be over-permissive until https://bugs.webkit.org/show_bug.cgi?id=34442
    // gets resolved. Else, iOS users cannot open `.drawnix` files.
    // extensions: ["json", "drawnix", "png", "svg"],
  });
  return hs(e, await ps(t));
}, ds = (e) => e && e.type === Wn.drawnix && Array.isArray(e.elements) && typeof e.viewport == "object", fs = (e) => {
  const t = {
    type: Wn.drawnix,
    version: qa.drawnix,
    source: "web",
    elements: e.children,
    viewport: e.viewport
  };
  return JSON.stringify(t, null, 2);
}, hs = async (e, t) => {
  const n = await vs(t);
  let r;
  try {
    if (r = JSON.parse(n), ds(r))
      return r;
    throw new Error("Error: invalid file");
  } catch {
    throw new Error("Error: invalid file");
  }
}, ms = (e, t, n) => new File([e], n || "", {
  type: t
}), gs = (e) => "arrayBuffer" in e ? e.arrayBuffer() : new Promise((t, n) => {
  const r = new FileReader();
  r.onload = (i) => {
    var o;
    if (!((o = i.target) != null && o.result))
      return n(new Error("Couldn't convert blob to ArrayBuffer"));
    t(i.target.result);
  }, r.readAsArrayBuffer(e);
}), ps = async (e) => {
  var t;
  return e.type || (t = e == null ? void 0 : e.name) != null && t.endsWith(".drawnix") && (e = ms(
    await gs(e),
    Hn.drawnix,
    e.name
  )), e;
}, vs = async (e) => {
  let t;
  return "text" in Blob ? t = await e.text() : t = await new Promise((n) => {
    const r = new FileReader();
    r.readAsText(e, "utf8"), r.onloadend = () => {
      r.readyState === FileReader.DONE && n(r.result);
    };
  }), t;
}, ws = async (e) => new Promise((t, n) => {
  const r = new FileReader();
  r.onload = () => {
    const i = r.result;
    t(i);
  }, r.onerror = (i) => n(i), r.readAsDataURL(e);
}), fr = (e) => !!e && Object.values(jn).includes(e), ys = (e) => new Promise((t, n) => {
  const r = new Image();
  r.onload = () => {
    t(r);
  }, r.onerror = (i) => {
    n(i);
  }, r.src = e;
}), Cs = (e, t, n) => {
  const r = e.width > n ? n : e.width, i = r / e.width * e.height;
  return {
    url: t,
    width: r,
    height: i
  };
}, En = async (e, t, n, r) => {
  const i = Ie(e)[0] || bi(e), o = i ? 240 : 400, s = await ws(t), l = await ys(s), c = Cs(l, s, o), u = n && fi(e, n);
  if (r && u && Ee.isMindElement(e, u)) {
    lr.setImage(e, u, c);
    return;
  }
  i && Ee.isMindElement(e, i) && !r ? lr.setImage(e, i, c) : Ea.insertImage(e, c, n);
};
class bs {
  constructor(t = {}) {
    this.overlay = null, this.imageContainer = null, this.image = null, this.closeButton = null, this.controlsContainer = null, this.delegationHandler = null, this.dragHandler = null, this.mouseUpHandler = null, this.animationFrameId = null, this.pendingUpdate = !1, this.state = {
      zoom: 1,
      x: 0,
      y: 0,
      isDragging: !1,
      dragStartX: 0,
      dragStartY: 0,
      imageStartX: 0,
      imageStartY: 0
    }, this.styleElement = null, this.options = {
      zoomStep: t.zoomStep || 0.2,
      minZoom: t.minZoom || 0.1,
      maxZoom: t.maxZoom || 5,
      enableKeyboard: t.enableKeyboard !== !1
    }, this.addStyles(), this.bindEvents();
  }
  // 打开图片查看器
  open(t, n = "") {
    this.createOverlay(), this.createImage(t, n), this.resetState(), document.body.style.overflow = "hidden";
  }
  // 关闭图片查看器
  close() {
    this.overlay && (this.cleanupDragEvents(), document.removeEventListener("mousemove", this.delegationHandler), document.removeEventListener("mouseup", this.delegationHandler), document.removeEventListener("keydown", this.delegationHandler), document.removeEventListener("wheel", this.delegationHandler), this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), document.body.removeChild(this.overlay), this.overlay = null, this.image = null, this.imageContainer = null, this.closeButton = null, this.controlsContainer = null, this.delegationHandler = null, this.dragHandler = null, this.mouseUpHandler = null, this.pendingUpdate = !1), document.body.style.overflow = "";
  }
  // 创建遮罩层
  createOverlay() {
    this.overlay = document.createElement("div"), this.overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(45, 45, 45, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      cursor: grab;
    `, this.overlay.addEventListener("click", (t) => {
      t.target === this.overlay && this.close();
    }), this.createCloseButton(), this.createControls(), document.body.appendChild(this.overlay);
  }
  // 创建关闭按钮
  createCloseButton() {
    this.closeButton = document.createElement("div"), this.closeButton.innerHTML = "×", this.closeButton.className = "image-viewer-close-btn", this.closeButton.addEventListener("click", () => this.close()), this.overlay.appendChild(this.closeButton);
  }
  // 创建控制按钮
  createControls() {
    this.controlsContainer = document.createElement("div"), this.controlsContainer.style.cssText = `
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      z-index: 10001;
    `, this.addStyles();
    const t = document.createElement("button");
    t.innerHTML = "+", t.className = "image-viewer-control-btn", t.addEventListener("click", () => this.zoomIn());
    const n = document.createElement("button");
    n.innerHTML = "-", n.className = "image-viewer-control-btn", n.addEventListener("click", () => this.zoomOut());
    const r = document.createElement("button");
    r.innerHTML = "⌂", r.className = "image-viewer-control-btn", r.addEventListener("click", () => this.resetState()), this.controlsContainer.appendChild(n), this.controlsContainer.appendChild(r), this.controlsContainer.appendChild(t), this.overlay.appendChild(this.controlsContainer);
  }
  // 创建图片元素
  createImage(t, n) {
    this.imageContainer = document.createElement("div"), this.imageContainer.style.cssText = `
      position: relative;
      cursor: grab;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: calc(100vw - 80px);
      max-height: calc(100vh - 160px);
    `, this.image = document.createElement("img"), this.image.src = t, this.image.alt = n, this.image.style.cssText = `
      max-width: calc(100vw - 80px);
      max-height: calc(100vh - 160px);
      width: auto;
      height: auto;
      display: block;
      user-select: none;
      pointer-events: none;
      object-fit: contain;
    `, this.imageContainer.appendChild(this.image), this.overlay.appendChild(this.imageContainer), this.bindDragEvents();
  }
  // 绑定拖拽事件
  bindDragEvents() {
    this.imageContainer && (this.dragHandler = (t) => {
      if (!this.state.isDragging) return;
      const n = t.clientX - this.state.dragStartX, r = t.clientY - this.state.dragStartY;
      this.state.x = this.state.imageStartX + n, this.state.y = this.state.imageStartY + r, this.pendingUpdate || (this.pendingUpdate = !0, this.animationFrameId = requestAnimationFrame(() => {
        this.updateImageTransform(), this.pendingUpdate = !1;
      }));
    }, this.mouseUpHandler = () => {
      this.state.isDragging && (this.state.isDragging = !1, this.imageContainer && (this.imageContainer.style.cursor = "grab"), this.overlay && (this.overlay.style.cursor = "grab"), this.cleanupDragEvents());
    }, this.imageContainer.addEventListener("mousedown", (t) => {
      t.preventDefault(), this.state.isDragging = !0, this.state.dragStartX = t.clientX, this.state.dragStartY = t.clientY, this.state.imageStartX = this.state.x, this.state.imageStartY = this.state.y, this.imageContainer && (this.imageContainer.style.cursor = "grabbing"), this.overlay && (this.overlay.style.cursor = "grabbing"), this.dragHandler && this.mouseUpHandler && (document.addEventListener("mousemove", this.dragHandler, { passive: !0 }), document.addEventListener("mouseup", this.mouseUpHandler, { once: !0 }));
    }));
  }
  // 清理拖动事件监听器
  cleanupDragEvents() {
    this.dragHandler && document.removeEventListener("mousemove", this.dragHandler), this.mouseUpHandler && document.removeEventListener("mouseup", this.mouseUpHandler);
  }
  // 绑定全局事件
  bindEvents() {
    this.delegationHandler = (t) => {
      if (this.overlay) {
        if (t.type === "keydown" && this.options.enableKeyboard) {
          const n = t;
          switch (n.key) {
            case "Escape":
              this.close();
              break;
            case "+":
            case "=":
              n.preventDefault(), this.zoomIn();
              break;
            case "-":
              n.preventDefault(), this.zoomOut();
              break;
            case "0":
              n.preventDefault(), this.resetState();
              break;
          }
        } else if (t.type === "wheel") {
          const n = t;
          n.preventDefault(), n.deltaY < 0 ? this.zoomIn() : this.zoomOut();
        }
      }
    }, document.addEventListener("keydown", this.delegationHandler), document.addEventListener("wheel", this.delegationHandler, {
      passive: !1
    });
  }
  // 放大
  zoomIn() {
    this.state.zoom = Math.min(
      this.state.zoom + this.options.zoomStep,
      this.options.maxZoom
    ), this.updateImageTransform();
  }
  // 缩小
  zoomOut() {
    this.state.zoom = Math.max(
      this.state.zoom - this.options.zoomStep,
      this.options.minZoom
    ), this.updateImageTransform();
  }
  // 重置状态
  resetState() {
    this.state.zoom = 1, this.state.x = 0, this.state.y = 0, this.updateImageTransform();
  }
  // 更新图片变换
  updateImageTransform() {
    this.imageContainer && (this.imageContainer.style.transform = `
      translate(${this.state.x}px, ${this.state.y}px) 
      scale(${this.state.zoom})
    `);
  }
  // 添加样式
  addStyles() {
    this.styleElement || (this.styleElement = document.createElement("style"), this.styleElement.textContent = `
        .image-viewer-control-btn {
          background: rgba(0, 0, 0, 0.8);
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 18px;
          transition: background 0.2s;
          user-select: none;
        }
        
        .image-viewer-control-btn:hover {
          background: rgba(0, 0, 0, 0.4);
        }
        
        .image-viewer-close-btn {
          position: absolute;
          top: 20px;
          right: 30px;
          color: white;
          font-size: 18px;
          cursor: pointer;
          z-index: 10001;
          user-select: none;
          width: 36px;
          height: 34px;
          display: flex;
          border-radius: 50%;
          justify-content: center;
          background: rgba(0, 0, 0, 0.8);
          transition: all 0.2s ease;
          line-height: 34px;
          padding-bottom:2px;
        }
        
        .image-viewer-close-btn:hover {
          background: rgba(0, 0, 0, 0.4);
        }
      `, document.head.appendChild(this.styleElement));
  }
  // 移除样式
  removeStyles() {
    this.styleElement && (document.head.removeChild(this.styleElement), this.styleElement = null);
  }
  // 销毁实例
  destroy() {
    this.close(), this.removeStyles();
  }
}
const ks = (e) => {
  const t = e, { insertFragment: n, drop: r, pointerUp: i } = t, o = new bs({
    zoomStep: 0.3,
    minZoom: 0.1,
    maxZoom: 5,
    enableKeyboard: !0
  });
  return t.insertFragment = (s, l, c) => {
    var u;
    if ((u = s == null ? void 0 : s.files) != null && u.length && fr(s.files[0].type)) {
      const d = s.files[0];
      En(e, d, l, !1);
      return;
    }
    n(s, l, c);
  }, t.drop = (s) => {
    var l, c;
    if ((c = (l = s.dataTransfer) == null ? void 0 : l.files) != null && c.length) {
      const u = s.dataTransfer.files[0];
      if (fr(u.type)) {
        const d = dt(
          e,
          ft(e, s.x, s.y)
        );
        return En(e, u, d, !0), !0;
      }
    }
    return r(s);
  }, t.pointerUp = (s) => {
    const l = bi(e);
    if (l && !ki(e) && !hi(e) && !Cn(e)) {
      const c = dt(e, ft(e, s.x, s.y)), u = fi(e, c);
      u && Ee.isMindElement(e, u) && Ee.hasImage(u) && Ia(e, u, c) && l === u && o.open(u.data.image.url);
    }
    i(s);
  }, t;
}, Wi = (e) => {
  const t = e;
  return t.renderImage = (n, r) => {
    const i = zi.createRoot(n);
    i.render(/* @__PURE__ */ a(dr, { ...r }));
    let o = { ...r };
    return {
      destroy: () => {
        setTimeout(() => {
          i.unmount();
        }, 0);
      },
      update: (l) => {
        o = { ...o, ...l }, i.render(/* @__PURE__ */ a(dr, { ...o }));
      }
    };
  }, ks(t);
}, pe = Ue.forwardRef(
  ({ children: e, padding: t, className: n, style: r, ...i }, o) => /* @__PURE__ */ a(
    "div",
    {
      className: T("island", n),
      style: { "--padding": t, ...r },
      ref: o,
      ...i,
      children: e
    }
  )
), xs = yi(
  ({ children: e, gap: t, align: n, justifyContent: r, className: i, style: o }, s) => /* @__PURE__ */ a(
    "div",
    {
      className: T("stack stack_horizontal", i),
      style: {
        "--gap": t,
        alignItems: n,
        justifyContent: r,
        ...o
      },
      ref: s,
      children: e
    }
  )
), Es = yi(
  ({ children: e, gap: t, align: n, justifyContent: r, className: i, style: o }, s) => /* @__PURE__ */ a(
    "div",
    {
      className: T("stack stack_vertical", i),
      style: {
        "--gap": t,
        justifyItems: n,
        justifyContent: r,
        ...o
      },
      ref: s,
      children: e
    }
  )
), oe = {
  Row: xs,
  Col: Es
};
class Os extends DOMException {
  constructor(t = "Request Aborted") {
    super(t, "AbortError");
  }
}
const Ss = (e) => !!e && typeof e == "object" && "then" in e && "catch" in e && "finally" in e, Ps = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => function(i) {
  if (e == null || e(i), !n || !(i != null && i.defaultPrevented))
    return t == null ? void 0 : t(i);
}, Ls = (e) => {
  const t = e.split(","), n = t[0].match(/:(.*?);/)[1], r = atob(t[1]);
  let i = r.length;
  const o = new Uint8Array(i);
  for (; i--; )
    o[i] = r.charCodeAt(i);
  return new Blob([o], {
    type: n
  });
}, Ms = (e, t = {}) => Xo(e, {
  fillStyle: "transparent",
  inlineStyleClassNames: ".extend,.emojis,.text",
  padding: 20,
  ratio: 4,
  ...t
});
function Ds(e, t) {
  const n = document.createElement("a"), r = window.URL.createObjectURL(e);
  n.href = r, n.download = t, document.body.append(n), n.click(), window.URL.revokeObjectURL(r), n.remove();
}
const qn = (e, t) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push(e.slice(r, r + t));
  return n;
}, hr = (e) => (e = e.replace(/\bAlt\b/i, "Alt").replace(/\bShift\b/i, "Shift").replace(/\b(Enter|Return)\b/i, "Enter"), mi || Jo ? e.replace(/\bCtrlOrCmd\b/gi, "Cmd").replace(/\bAlt\b/i, "Option") : e.replace(/\bCtrlOrCmd\b/gi, "Ctrl")), R = Ue.forwardRef((e, t) => {
  const { id: n } = { id: "drawnix" }, r = Ue.useRef(null);
  Ue.useImperativeHandle(t, () => r.current);
  const i = `tool-icon_size_${e.size || "medium"}`, [o, s] = F(!1), l = xe(!0), c = async (d) => {
    var f;
    const h = "onClick" in e && ((f = e.onClick) == null ? void 0 : f.call(e, d));
    if (Ss(h))
      try {
        s(!0), await h;
      } catch (m) {
        if (m instanceof Os)
          console.warn(m);
        else
          throw m;
      } finally {
        l.current && s(!1);
      }
  };
  ie(() => (l.current = !0, () => {
    l.current = !1;
  }), []);
  const u = xe(null);
  if (e.type === "button" || e.type === "icon" || e.type === "submit") {
    const d = e.type === "icon" ? "button" : e.type;
    return /* @__PURE__ */ k(
      "button",
      {
        className: T(
          "tool-icon_type_button",
          i,
          e.className,
          e.visible && !e.hidden ? "tool-icon_type_button--show" : "tool-icon_type_button--hide",
          {
            "tool-icon": !e.hidden,
            "tool-icon--selected": e.selected
          }
        ),
        style: e.style,
        "data-testid": e["data-testid"],
        hidden: e.hidden,
        title: e.title,
        "aria-label": e["aria-label"],
        type: d,
        onClick: c,
        onPointerDown: (h) => {
          var f;
          (f = e.onPointerDown) == null || f.call(e, {
            pointerType: h.pointerType || null,
            event: h
          });
        },
        onPointerUp: (h) => {
          var f;
          (f = e.onPointerUp) == null || f.call(e, { pointerType: h.pointerType || null });
        },
        ref: r,
        disabled: o || !!e.disabled,
        children: [
          (e.icon || e.label) && /* @__PURE__ */ k(
            "div",
            {
              className: "tool-icon__icon",
              "aria-hidden": "true",
              "aria-disabled": !!e.disabled,
              children: [
                e.icon || e.label,
                e.keyBindingLabel && /* @__PURE__ */ a("span", { className: "tool-icon__keybinding", children: e.keyBindingLabel })
              ]
            }
          ),
          e.showAriaLabel && /* @__PURE__ */ a("div", { className: "tool-icon__label", children: e["aria-label"] }),
          e.children && /* @__PURE__ */ a("div", { className: "tool-icon__icon", children: e.children })
        ]
      }
    );
  }
  return /* @__PURE__ */ k(
    "label",
    {
      className: T("tool-icon", e.className),
      title: e.title,
      onPointerDown: (d) => {
        var h;
        u.current = d.pointerType || null, (h = e.onPointerDown) == null || h.call(e, {
          pointerType: d.pointerType || null,
          event: d
        });
      },
      onPointerUp: (d) => {
        var h;
        (h = e.onPointerUp) == null || h.call(e, { pointerType: d.pointerType || null }), requestAnimationFrame(() => {
          u.current = null;
        });
      },
      children: [
        /* @__PURE__ */ a(
          "input",
          {
            className: `tool-icon_type_radio ${i}`,
            type: "radio",
            name: e.name,
            "aria-label": e["aria-label"],
            "aria-keyshortcuts": e["aria-keyshortcuts"],
            "data-testid": e["data-testid"],
            id: `${n}-${e.id}`,
            onChange: () => {
              var d;
              (d = e.onChange) == null || d.call(e, { pointerType: u.current });
            },
            checked: e.checked,
            ref: r
          }
        ),
        /* @__PURE__ */ k("div", { className: "tool-icon__icon", children: [
          e.icon,
          e.keyBindingLabel && /* @__PURE__ */ a("span", { className: "tool-icon__keybinding", children: e.keyBindingLabel })
        ] })
      ]
    }
  );
});
R.displayName = "ToolButton";
const O = (e) => e, Ts = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "Hand", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M8.44583468,0.500225887 C9.07406934,0.510185679 9.54739531,0.839591366 9.86192311,1.34305279 C9.89696656,1.39914649 9.92878401,1.45492964 9.9576026,1.50991157 L9.9576026,1.50991157 L10.0210033,1.64201027 L10.061978,1.62350755 C10.1972891,1.56834247 10.3444107,1.53218464 10.5027907,1.51755353 L10.5027907,1.51755353 L10.6649031,1.51019133 C11.4883708,1.51019133 12.0208782,1.99343346 12.3023042,2.66393278 C12.3903714,2.87392911 12.4344191,3.10047818 12.4339446,3.3257952 L12.4339446,3.3257952 L12.4360033,3.80501027 L12.5160535,3.78341501 C12.6124478,3.76124046 12.7138812,3.74739854 12.820201,3.74250274 L12.820201,3.74250274 L12.9833264,3.74194533 C13.6121166,3.7657478 14.0645887,4.0801724 14.3087062,4.56112689 C14.4521117,4.8436609 14.4987984,5.11349437 14.4999262,5.33449618 L14.4999262,5.33449618 L14.3922653,12.049414 C14.3784752,12.909177 14.0717787,13.7360948 13.5212406,14.3825228 C13.4055676,14.5183496 13.2843697,14.643961 13.1582361,14.7596335 C12.4634771,15.3967716 11.755103,15.6538706 11.1897396,15.7000055 L11.1897396,15.7000055 L7.4723083,15.6798158 C7.14276373,15.634268 6.81580098,15.5154267 6.49455235,15.3472501 C6.25643701,15.2225944 6.06881706,15.0975452 5.88705731,14.9494308 L5.88705731,14.9494308 L2.55198782,11.500873 C2.39559475,11.3769079 2.17626793,11.1748532 1.9548636,10.9139403 C1.57867502,10.4706225 1.33501976,10.0139923 1.30330257,9.52833025 C1.28093191,9.18578476 1.37200912,8.85641102 1.5826788,8.56872564 C1.82538833,8.23725279 2.12881965,8.02107162 2.47470569,7.92957033 C2.95807982,7.80169771 3.42705723,7.92468989 3.86509644,8.18731167 C4.04431391,8.29475961 4.1816109,8.40304483 4.26225571,8.47866867 L4.26225571,8.47866867 L4.61400328,8.79701027 L4.57247249,3.59275349 L4.57628524,3.46204923 C4.5897691,3.23444442 4.64087578,2.95701848 4.75937106,2.66961597 C5.01017272,2.06131302 5.49670227,1.64692543 6.21363856,1.60818786 C6.44223508,1.59583681 6.65042099,1.62176802 6.83696985,1.68057551 L6.83696985,1.68057551 L6.86400328,1.69001027 C6.88501862,1.63593052 6.90764242,1.58175442 6.9331867,1.52672633 L6.9331867,1.52672633 L7.01883595,1.35955614 C7.31549194,0.832047939 7.79476072,0.48993549 8.44583468,0.500225887 Z M8.42684173,1.70001476 C8.26825412,1.69756905 8.16339456,1.77242008 8.06478367,1.94776814 C8.03967773,1.99241107 8.01831703,2.03811495 8.00083464,2.07855067 L8.00083464,2.07855067 L7.94879157,2.2035905 L7.94354455,2.20731401 L7.943,3.161 L7.97170661,3.16123746 L7.97170661,7.60991883 L6.77170661,7.60991883 L6.771,3.338 L6.74362358,3.33880359 C6.74284189,3.29064626 6.73014163,3.20282206 6.7002616,3.11094408 L6.66446012,3.01903385 C6.58982025,2.85766739 6.49843292,2.79455071 6.27838133,2.80644008 C6.07001018,2.81769881 5.95642108,2.91444507 5.86877664,3.12702089 C5.79792279,3.29887224 5.77228127,3.48655908 5.77246879,3.58977183 L5.77246879,3.58977183 L5.83613619,11.5252021 L3.41863956,9.33477657 L3.31637296,9.25979571 L3.24805011,9.21651224 C3.06096922,9.10434987 2.89279975,9.06024641 2.78159879,9.0896637 C2.71007735,9.10858411 2.63607367,9.1613084 2.55086305,9.27768211 C2.51020424,9.33320478 2.49638061,9.38319687 2.50075171,9.4501283 C2.51206889,9.62341997 2.64503022,9.87260054 2.86983366,10.1375191 C3.03268834,10.3294345 3.19762053,10.4813781 3.35554956,10.6131022 L3.35554956,10.6131022 L6.68454317,14.0569073 C6.71106575,14.0773808 6.74806086,14.1037158 6.79369091,14.1335929 L6.79369091,14.1335929 L6.95464838,14.2315311 L7.05111031,14.2841211 C7.25978123,14.3933622 7.46253523,14.4670573 7.55685495,14.4854708 L7.55685495,14.4854708 L11.1407985,14.5022108 C11.1503576,14.5013899 11.1627905,14.4997539 11.1779002,14.4971772 L11.1779002,14.4971772 L11.2991076,14.4694224 C11.3491682,14.4557375 11.4083624,14.437284 11.4751158,14.4130563 C11.769383,14.3062543 12.066676,14.1324596 12.3471758,13.8752234 C12.4371203,13.7927386 12.5240597,13.7026333 12.607654,13.6044743 C12.9760464,13.1719172 13.183059,12.6137678 13.1924195,12.030173 L13.1924195,12.030173 L13.3000132,5.32832551 C13.2997939,5.29016685 13.2826117,5.19085946 13.2386527,5.10425262 C13.1843838,4.99733326 13.1129774,4.94771265 12.9379578,4.94108739 C12.6814739,4.93138871 12.534132,5.11189595 12.4756792,5.39480062 L12.4768718,7.52734922 L11.2768718,7.52734922 L11.276,5.688 L11.2462883,5.6883208 L11.2339541,3.32771285 C11.2341,3.2560396 11.2209054,3.18817621 11.1957482,3.12818892 C11.0820579,2.85732094 10.9199288,2.71019133 10.6649031,2.71019133 C10.456829,2.71019133 10.3197487,2.87378067 10.2524297,3.11264939 L10.2530225,7.512783 L9.05302254,7.512783 L9.053,3.288 L9.01554331,3.28724203 L8.98800328,2.29901027 L8.9629175,2.22263368 C8.94515567,2.17417174 8.92167756,2.11937748 8.8924232,2.06330056 L8.8924232,2.06330056 L8.84420197,1.9788544 C8.72758855,1.79219249 8.59915015,1.70280728 8.42684173,1.70001476 Z" }) }) })
), _s = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "selection", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M1.38232686,2.38218266 L5.4143451,14.2246629 L5.45540179,14.3136477 C5.6738376,14.7029541 6.25143564,14.7273637 6.49230627,14.3232393 L8.11486037,11.5990854 L10.8833927,14.4351257 C11.1162256,14.673686 11.4988798,14.6767204 11.7354668,14.4418826 L14.1933351,12.0021862 L14.263123,11.9192708 C14.4260847,11.6858139 14.4039042,11.3621027 14.1959502,11.1531274 L11.3598604,8.30408543 L14.0003903,6.44278167 C14.4042341,6.15799031 14.3099422,5.5344405 13.8399491,5.38178897 L2.13023795,1.60291226 C1.65322163,1.44797961 1.20794286,1.91192855 1.38232686,2.38218266 Z M2.93689198,3.12556703 L12.3288604,6.15308543 L10.0883903,7.73315528 L10.0121747,7.79676991 C9.78025886,8.02517222 9.77056424,8.40723513 10.0088753,8.64671667 L12.9218604,11.5730854 L11.3198604,13.1630854 L8.42938714,10.2026992 L8.35682877,10.1391916 C8.07802132,9.93187508 7.66955488,10.0042813 7.48460396,10.3145856 L6.10286037,12.6310854 L2.93689198,3.12556703 Z" }) }) })
), Fs = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "Mind", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M14.5,1.5 C15.3284271,1.5 16,2.17157288 16,3 L16,4.5 C16,5.32842712 15.3284271,6 14.5,6 L10.5,6 C9.70541385,6 9.05512881,5.38217354 9.00332687,4.60070262 L7.75,4.6 C6.70187486,4.6 5.75693372,5.0417832 5.09122946,5.7492967 L5.5,5.75 C6.32842712,5.75 7,6.42157288 7,7.25 L7,8.75 C7,9.57842712 6.32842712,10.25 5.5,10.25 L4.69703093,10.2512226 C5.3493111,11.2442937 6.47308134,11.9 7.75,11.9 L9.004,11.9 L9.00686658,11.85554 C9.07955132,11.0948881 9.72030388,10.5 10.5,10.5 L14.5,10.5 C15.3284271,10.5 16,11.1715729 16,12 L16,13.5 C16,14.3284271 15.3284271,15 14.5,15 L10.5,15 C9.67157288,15 9,14.3284271 9,13.5 L9,13.1 L7.75,13.1 C5.78479628,13.1 4.09258608,11.9311758 3.33061658,10.2507745 L1.5,10.25 C0.671572875,10.25 0,9.57842712 0,8.75 L0,7.25 C0,6.42157288 0.671572875,5.75 1.5,5.75 L3.5932906,5.74973863 C4.44206161,4.34167555 5.98606075,3.4 7.75,3.4 L9,3.4 L9,3 C9,2.17157288 9.67157288,1.5 10.5,1.5 L14.5,1.5 Z M14.5,11.7 L10.5,11.7 C10.3343146,11.7 10.2,11.8343146 10.2,12 L10.2,13.5 C10.2,13.6656854 10.3343146,13.8 10.5,13.8 L14.5,13.8 C14.6656854,13.8 14.8,13.6656854 14.8,13.5 L14.8,12 C14.8,11.8343146 14.6656854,11.7 14.5,11.7 Z M5.5,6.95 L1.5,6.95 C1.33431458,6.95 1.2,7.08431458 1.2,7.25 L1.2,8.75 C1.2,8.91568542 1.33431458,9.05 1.5,9.05 L5.5,9.05 C5.66568542,9.05 5.8,8.91568542 5.8,8.75 L5.8,7.25 C5.8,7.08431458 5.66568542,6.95 5.5,6.95 Z M14.5,2.7 L10.5,2.7 C10.3343146,2.7 10.2,2.83431458 10.2,3 L10.2,4.5 C10.2,4.66568542 10.3343146,4.8 10.5,4.8 L14.5,4.8 C14.6656854,4.8 14.8,4.66568542 14.8,4.5 L14.8,3 C14.8,2.83431458 14.6656854,2.7 14.5,2.7 Z" }) }) })
), Is = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "geometry", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M9.3,6.7 L1.7,6.7 L1.7,14.3 L9.3,14.3 L9.3,6.7 Z M10.5,9.8 C12.8748244,9.8 14.8,7.87482442 14.8,5.5 C14.8,3.12517558 12.8748244,1.2 10.5,1.2 C8.12517558,1.2 6.2,3.12517558 6.2,5.5 L9.5,5.5 C10.0522847,5.5 10.5,5.94771525 10.5,6.5 L10.5,9.8 Z M10.5,14.5 C10.5,15.0522847 10.0522847,15.5 9.5,15.5 L1.5,15.5 C0.94771525,15.5 0.5,15.0522847 0.5,14.5 L0.5,6.5 C0.5,5.94771525 0.94771525,5.5 1.5,5.5 L5,5.5 C5,2.46243388 7.46243388,0 10.5,0 C13.5375661,0 16,2.46243388 16,5.5 C16,8.53756612 13.5375661,11 10.5,11 L10.5,14.5 Z" }) }) })
), Rs = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "font", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M4.75,14.5069828 C4.41862915,14.5069828 4.15,14.2383536 4.15,13.9069828 C4.15,13.5756119 4.41862915,13.3069828 4.75,13.3069828 L7.3993606,13.306 L7.3993606,2.7 L2.7113606,2.7 L2.7113606,4.10415313 C2.7113606,4.40238689 2.49377099,4.64979988 2.20868371,4.69630014 L2.1113606,4.70415313 C1.77998975,4.70415313 1.5113606,4.43552397 1.5113606,4.10415313 L1.5113606,2.1 C1.5113606,1.76862915 1.77998975,1.5 2.1113606,1.5 L13.8810378,1.5 C14.2124087,1.5 14.4810378,1.76862915 14.4810378,2.1 L14.4810378,4.10415313 C14.4810378,4.43552397 14.2124087,4.70415313 13.8810378,4.70415313 C13.549667,4.70415313 13.2810378,4.43552397 13.2810378,4.10415313 L13.2810378,2.7 L8.5993606,2.7 L8.5993606,13.306 L11.25,13.3069828 C11.5813708,13.3069828 11.85,13.5756119 11.85,13.9069828 C11.85,14.2383536 11.5813708,14.5069828 11.25,14.5069828 L4.75,14.5069828 Z" }) }) })
), Ns = O(
  /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ a("path", { stroke: "none", d: "M0 0h24v24H0z" }),
    /* @__PURE__ */ a("path", { d: "M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" }),
    /* @__PURE__ */ a("path", { d: "M18 13.3l-6.3 -6.3" })
  ] })
), As = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { id: "straight-line", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M8.55595221,-1.5261864 C8.88741773,-1.5261864 9.15621426,-1.25765205 9.15653772,-0.926186684 L9.16739175,10.3828136 L10.9946787,10.3836977 C11.2708211,10.3836977 11.4946787,10.6075553 11.4946787,10.8836977 C11.4946787,10.9607525 11.4768694,11.0367648 11.4426413,11.1058002 L8.8378495,16.3594519 C8.7642512,16.5078936 8.58425218,16.5685662 8.43581043,16.4949679 C8.37895485,16.4667786 8.33250284,16.4212859 8.30313336,16.3650308 L5.56226325,11.1150985 C5.43446412,10.8703088 5.52930372,10.5682659 5.77409341,10.4404667 C5.84552557,10.4031736 5.92491301,10.3836977 6.0054942,10.3836977 L7.96739175,10.3828136 L7.95653772,-0.926186684 C7.95621467,-1.25723416 8.22431979,-1.52586306 8.55536727,-1.52618611 Z",
      id: "",
      transform: "translate(8.500035, 7.500035) rotate(-135.000000) translate(-8.500035, -7.500035) "
    }
  ) }) })
), Bs = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M3 3h18v18H3z",
      stroke: "currentColor",
      strokeWidth: "2",
      fill: "none"
    }
  ) })
), zs = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", children: /* @__PURE__ */ a("g", { id: "terminal", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M11,3 C13.7614237,3 16,5.23857625 16,8 C16,10.7614237 13.7614237,13 11,13 L5,13 C2.23857625,13 0,10.7614237 0,8 C0,5.23857625 2.23857625,3 5,3 L11,3 Z M11,4.2 L5,4.2 C2.90131795,4.2 1.2,5.90131795 1.2,8 C1.2,10.0330982 2.79664702,11.6932796 4.8044525,11.7950555 L5,11.8 L11,11.8 C13.098682,11.8 14.8,10.098682 14.8,8 C14.8,5.96690176 13.203353,4.30672042 11.1955475,4.20494454 L11,4.2 Z" }) }) })
), js = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { id: "ellipse", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2.2 C4.79674845,2.2 2.2,4.79674845 2.2,8 C2.2,11.2032515 4.79674845,13.8 8,13.8 C11.2032515,13.8 13.8,11.2032515 13.8,8 C13.8,4.79674845 11.2032515,2.2 8,2.2 Z" }) }) })
), Hs = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { id: "triangle", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M8.23125547,1.21366135 C8.3114266,1.25857939 8.37766784,1.32472334 8.42270367,1.40482837 L15.6471754,14.2549655 C15.7825042,14.4956743 15.6970768,14.800513 15.456368,14.9358418 C15.3815505,14.977905 15.2971646,15 15.2113335,15 L0.787227066,15 C0.511084691,15 0.287227066,14.7761424 0.287227066,14.5 C0.287227066,14.414418 0.309194147,14.3302684 0.351025556,14.2556064 L7.55066033,1.40546924 C7.6856352,1.1645618 7.99034802,1.07868648 8.23125547,1.21366135 Z M7.98695902,3.07926294 L1.98095902,13.7992629 L14.014959,13.7992629 L7.98695902,3.07926294 Z" }) }) })
), Us = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M13.7636471,2.6449804 C13.7716713,2.69552516 13.7718878,2.74700226 13.7642892,2.79761274 L12.3875778,11.9671885 C12.3550099,12.1841069 12.184864,12.3544698 11.9679874,12.3873141 L2.78433018,13.7781116 C2.511301,13.8194599 2.25644773,13.6316454 2.21509947,13.3586162 C2.20737253,13.307594 2.20759072,13.2556831 2.21574631,13.2047277 L3.67471119,4.08923146 C3.70888725,3.87570215 3.87646006,3.70834166 4.09003253,3.67443635 L13.1914362,2.22955927 C13.4641633,2.18626298 13.7203508,2.37225335 13.7636471,2.6449804 Z M12.4355704,3.5645263 L4.77957044,4.7795263 L3.55157044,12.4485263 L11.2775704,11.2775263 L12.4355704,3.5645263 Z",
      transform: "translate(7.989647, 8.003560) rotate(-315.000000) translate(-7.989647, -8.003560) "
    }
  ) }) })
), Ws = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M15.3062871,3.5 C15.5824294,3.5 15.8062871,3.72385763 15.8062871,4 C15.8062871,4.05374105 15.7976231,4.10713065 15.7806287,4.15811388 L13.113962,12.1581139 C13.045905,12.362285 12.8548356,12.5 12.6396204,12.5 L0.693712943,12.5 C0.417570568,12.5 0.193712943,12.2761424 0.193712943,12 C0.193712943,11.946259 0.202376883,11.8928694 0.219371294,11.8418861 L2.88603796,3.84188612 C2.95409498,3.63771505 3.14516441,3.5 3.36037961,3.5 L15.3062871,3.5 Z M14.335,4.7 L3.864,4.7 L1.664,11.3 L12.134,11.3 L14.335,4.7 Z" }) }) })
), qs = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M11,3 C13.7614237,3 16,5.23857625 16,8 C16,10.7614237 13.7614237,13 11,13 L5,13 C2.23857625,13 0,10.7614237 0,8 C0,5.23857625 2.23857625,3 5,3 L11,3 Z M11,4.2 L5,4.2 C2.90131795,4.2 1.2,5.90131795 1.2,8 C1.2,10.0330982 2.79664702,11.6932796 4.8044525,11.7950555 L5,11.8 L11,11.8 C13.098682,11.8 14.8,10.098682 14.8,8 C14.8,5.96690176 13.203353,4.30672042 11.1955475,4.20494454 L11,4.2 Z" }) }) })
), Ks = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M8.55595221,-1.5261864 C8.88741773,-1.5261864 9.15621426,-1.25765205 9.15653772,-0.926186684 L9.16739175,10.3828136 L10.9946787,10.3836977 C11.2708211,10.3836977 11.4946787,10.6075553 11.4946787,10.8836977 C11.4946787,10.9607525 11.4768694,11.0367648 11.4426413,11.1058002 L8.8378495,16.3594519 C8.7642512,16.5078936 8.58425218,16.5685662 8.43581043,16.4949679 C8.37895485,16.4667786 8.33250284,16.4212859 8.30313336,16.3650308 L5.56226325,11.1150985 C5.43446412,10.8703088 5.52930372,10.5682659 5.77409341,10.4404667 C5.84552557,10.4031736 5.92491301,10.3836977 6.0054942,10.3836977 L7.96739175,10.3828136 L7.95653772,-0.926186684 C7.95621467,-1.25723416 8.22431979,-1.52586306 8.55536727,-1.52618611 Z",
      transform: "translate(8.500035, 7.500035) rotate(-135.000000) translate(-8.500035, -7.500035) "
    }
  ) }) })
), $s = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M10.0153197,2.75391207 C10.0923746,2.75391207 10.1683869,2.77172133 10.2374222,2.80594949 L15.4910739,5.41074126 C15.6395156,5.48433956 15.7001882,5.66433859 15.6265899,5.81278033 C15.5984006,5.86963592 15.5529079,5.91608792 15.4966529,5.9454574 L10.2467205,8.68632752 C10.0019308,8.81412664 9.69988791,8.71928704 9.57208878,8.47449735 C9.53479568,8.40306519 9.51531974,8.32367776 9.51531974,8.24309656 L9.51458753,6.62591207 L6.16858753,6.62651279 L6.16914066,12.0061269 C6.16914066,12.3043606 5.95155104,12.5517736 5.66646377,12.5982739 L5.56914066,12.6061269 L0.534587532,12.6061269 C0.203216682,12.6061269 -0.0654124678,12.3374977 -0.0654124678,12.0061269 C-0.0654124678,11.674756 0.203216682,11.4061269 0.534587532,11.4061269 L4.96858753,11.4055128 L4.96914066,6.02651279 C4.96914066,5.72827903 5.18673027,5.48086604 5.47181754,5.43436578 L5.56914066,5.42651279 L9.51458753,5.42591207 L9.51531974,3.25391207 C9.51531974,2.9777697 9.73917736,2.75391207 10.0153197,2.75391207 Z" }) }) })
), Zs = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M10.0153197,2.75391207 C10.0923746,2.75391207 10.1683869,2.77172133 10.2374222,2.80594949 L15.4910739,5.41074126 C15.6395156,5.48433956 15.7001882,5.66433859 15.6265899,5.81278033 C15.5984006,5.86963592 15.5529079,5.91608792 15.4966529,5.9454574 L10.2467205,8.68632752 C10.0019308,8.81412664 9.69988791,8.71928704 9.57208878,8.47449735 C9.53479568,8.40306519 9.51531974,8.32367776 9.51531974,8.24309656 L9.51423005,6.39035523 C5.97984781,6.85936966 3.21691607,9.08498364 1.18879108,13.1285821 C1.04022695,13.4247836 0.679673152,13.5444674 0.383471635,13.3959033 C0.0872701176,13.2473391 -0.0324136308,12.8867853 0.116150501,12.5905838 C2.34388813,8.14900524 5.48945543,5.65776043 9.51468497,5.18078677 L9.51531974,3.25391207 C9.51531974,2.9777697 9.73917736,2.75391207 10.0153197,2.75391207 Z" }) }) })
), qi = O(
  /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: /* @__PURE__ */ k("g", { strokeWidth: "1.5", children: [
        /* @__PURE__ */ a("path", { stroke: "none", d: "M0 0h24v24H0z" }),
        /* @__PURE__ */ a("line", { x1: "4", y1: "6", x2: "20", y2: "6" }),
        /* @__PURE__ */ a("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
        /* @__PURE__ */ a("line", { x1: "4", y1: "18", x2: "20", y2: "18" })
      ] })
    }
  )
), Gs = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ a(
    "path",
    {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      d: "M7.5 15.833c-3.583 1.167-3.583-2.083-5-2.5m10 4.167v-2.917c0-.833.083-1.166-.417-1.666 2.334-.25 4.584-1.167 4.584-5a3.833 3.833 0 0 0-1.084-2.667 3.5 3.5 0 0 0-.083-2.667s-.917-.25-2.917 1.084a10.25 10.25 0 0 0-5.166 0C5.417 2.333 4.5 2.583 4.5 2.583a3.5 3.5 0 0 0-.083 2.667 3.833 3.833 0 0 0-1.084 2.667c0 3.833 2.25 4.75 4.584 5-.5.5-.5 1-.417 1.666V17.5",
      strokeWidth: "1.25"
    }
  ) })
), Vs = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ k(
    "g",
    {
      strokeWidth: "1.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: "none",
      children: [
        /* @__PURE__ */ a("path", { stroke: "none", d: "M0 0h24v24H0z" }),
        /* @__PURE__ */ a("path", { d: "M15 8h.01" }),
        /* @__PURE__ */ a("path", { d: "M12 20h-5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v5" }),
        /* @__PURE__ */ a("path", { d: "M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" }),
        /* @__PURE__ */ a("path", { d: "M14 14l1 -1c.617 -.593 1.328 -.793 2.009 -.598" }),
        /* @__PURE__ */ a("path", { d: "M19 16v6" }),
        /* @__PURE__ */ a("path", { d: "M22 19l-3 3l-3 -3" })
      ]
    }
  ) })
), Ys = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "zoom-out", stroke: "none", fill: "currentColor", strokeWidth: "1", children: /* @__PURE__ */ a(
    "path",
    {
      fillRule: "nonzero",
      d: "M6.85,2.73225886e-13 C10.6331505,2.73225886e-13 13.7,3.06684946 13.7,6.85 C13.7,8.54194045 13.0865836,10.0906098 12.0700142,11.2857448 L15.4201976,14.5717081 C15.6567367,14.8037768 15.6603607,15.1836585 15.4282919,15.4201976 C15.1962232,15.6567367 14.8163415,15.6603607 14.5798024,15.4282919 L14.5798024,15.4282919 L11.2163456,12.128262 C10.0309427,13.1099691 8.50937591,13.7 6.85,13.7 C3.06684946,13.7 4.58522109e-14,10.6331505 4.58522109e-14,6.85 C4.58522109e-14,3.06684946 3.06684946,2.73225886e-13 6.85,2.73225886e-13 Z M6.85,1.2 C3.72959116,1.2 1.2,3.72959116 1.2,6.85 C1.2,9.97040884 3.72959116,12.5 6.85,12.5 C8.31753357,12.5 9.65438791,11.9404957 10.6588859,11.0231643 C10.6855412,10.9625408 10.7245275,10.9050898 10.7743982,10.8542584 C10.8288931,10.7987137 10.8915387,10.7560124 10.9585649,10.7261903 C11.9144009,9.71595758 12.5,8.35136579 12.5,6.85 C12.5,3.72959116 9.97040884,1.2 6.85,1.2 Z M4.6,6.2 L9.12944565,6.2 C9.4608165,6.2 9.72944565,6.46862915 9.72944565,6.8 C9.72944565,7.09823376 9.51185604,7.34564675 9.22676876,7.39214701 L9.12944565,7.4 L4.6,7.4 C4.26862915,7.4 4,7.13137085 4,6.8 C4,6.50176624 4.21758961,6.25435325 4.50267688,6.20785299 L4.6,6.2 L9.12944565,6.2 Z"
    }
  ) }) })
), Xs = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "zoom-in", stroke: "none", fill: "currentColor", strokeWidth: "1", children: /* @__PURE__ */ a(
    "path",
    {
      fillRule: "nonzero",
      d: "M6.85,-1.81188398e-13 C10.6331505,-1.81188398e-13 13.7,3.06684946 13.7,6.85 C13.7,8.54194045 13.0865836,10.0906098 12.0700142,11.2857448 L15.4201976,14.5717081 C15.6567367,14.8037768 15.6603607,15.1836585 15.4282919,15.4201976 C15.1962232,15.6567367 14.8163415,15.6603607 14.5798024,15.4282919 L14.5798024,15.4282919 L11.2163456,12.128262 C10.0309427,13.1099691 8.50937591,13.7 6.85,13.7 C3.06684946,13.7 4.61852778e-14,10.6331505 4.61852778e-14,6.85 C4.61852778e-14,3.06684946 3.06684946,-1.81188398e-13 6.85,-1.81188398e-13 Z M6.85,1.2 C3.72959116,1.2 1.2,3.72959116 1.2,6.85 C1.2,9.97040884 3.72959116,12.5 6.85,12.5 C8.31753357,12.5 9.65438791,11.9404957 10.6588859,11.0231643 C10.6855412,10.9625408 10.7245275,10.9050898 10.7743982,10.8542584 C10.8288931,10.7987137 10.8915387,10.7560124 10.9585649,10.7261903 C11.9144009,9.71595758 12.5,8.35136579 12.5,6.85 C12.5,3.72959116 9.97040884,1.2 6.85,1.2 Z M6.86472282,3.93527718 C7.16295659,3.93527718 7.41036958,4.15286679 7.45686984,4.43795406 L7.46472282,4.53527718 L7.464,6.19927718 L9.12944565,6.2 C9.42767941,6.2 9.6750924,6.41758961 9.72159266,6.70267688 L9.72944565,6.8 C9.72944565,7.09823376 9.51185604,7.34564675 9.22676876,7.39214701 L9.12944565,7.4 L7.464,7.39927718 L7.46472282,9.06472282 C7.46472282,9.36295659 7.24713321,9.61036958 6.96204594,9.65686984 L6.86472282,9.66472282 C6.56648906,9.66472282 6.31907607,9.44713321 6.27257581,9.16204594 L6.26472282,9.06472282 L6.264,7.39927718 L4.6,7.4 C4.30176624,7.4 4.05435325,7.18241039 4.00785299,6.89732312 L4,6.8 C4,6.50176624 4.21758961,6.25435325 4.50267688,6.20785299 L4.6,6.2 L6.264,6.19927718 L6.26472282,4.53527718 C6.26472282,4.2701805 6.43664548,4.0452385 6.67507642,3.96586557 L6.76739971,3.94313016 L6.86472282,3.93527718 Z"
    }
  ) }) })
), Js = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 18 18", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "save-file", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      fillRule: "nonzero",
      d: "M11.064 9.1l2.645 2.595.03-.029.848.849-3.523 3.323-.848-.848 1.994-1.883H7.5v-1.2h4.712l-1.996-1.958.848-.849zM9.356.3L13.7 3.71V7.9h-1.2l-.001-2.633H8.5V1.5L3.1 1.5a.4.4 0 0 0-.392.32L2.7 1.9v12a.4.4 0 0 0 .32.392l.08.008h3.418v1.2H3.1a1.6 1.6 0 0 1-1.593-1.454L1.5 13.9v-12A1.6 1.6 0 0 1 2.954.307L3.1.3h6.256zM9.7 2.095v1.973l2.51-.001L9.7 2.095z"
    }
  ) }) })
), Qs = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 18 18", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "save-file", stroke: "currentColor", fill: "none", children: /* @__PURE__ */ a(
    "path",
    {
      d: "m9.257 6.351.183.183H15.819c.34 0 .727.182 1.051.506.323.323.505.708.505 1.05v5.819c0 .316-.183.7-.52 1.035-.337.338-.723.522-1.037.522H4.182c-.352 0-.74-.181-1.058-.5-.318-.318-.499-.705-.499-1.057V5.182c0-.351.181-.736.5-1.054.32-.321.71-.503 1.057-.503H6.53l2.726 2.726Z",
      strokeWidth: "1.25"
    }
  ) }) })
), el = O(
  /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: "background-color-icon",
      children: /* @__PURE__ */ k("g", { transform: "translate(1 1)", fillRule: "evenodd", fill: "#000", stroke: "none", children: [
        /* @__PURE__ */ a("circle", { fillOpacity: ".04", r: "11", cy: "11", cx: "11" }),
        /* @__PURE__ */ a(
          "path",
          {
            d: "M17 20.221V17h3.221A11.06 11.06 0 0 1 17 20.221zm-12 0A11.06 11.06 0 0 1 1.779 17H5v3.221zM20.221 5H17V1.779A11.06 11.06 0 0 1 20.221 5zM9 .181V1H6.411A10.919 10.919 0 0 1 9 .181zM15.589 1H13V.181c.907.167 1.775.445 2.589.819zM13 21.819V21h2.589c-.814.374-1.682.652-2.589.819zm-4 0A10.919 10.919 0 0 1 6.411 21H9v.819zm-8-6.23A10.919 10.919 0 0 1 .181 13H1v2.589zm0-9.178V9H.181C.348 8.093.626 7.225 1 6.411zM21.819 9H21V6.411c.374.814.652 1.682.819 2.589zM21 15.589V13h.819A10.919 10.919 0 0 1 21 15.589zM5 1.779V5H1.779A11.06 11.06 0 0 1 5 1.779zM5 13h4v4H5v-4zm8 0h4v4h-4v-4zM5 5h4v4H5V5zm8 0h4v4h-4V5zm0 12v4H9v-4h4zm8-8v4h-4V9h4zm-8 0v4H9V9h4zM5 9v4H1V9h4zm8-8v4H9V1h4z",
            fillOpacity: ".12"
          }
        )
      ] })
    }
  )
), tl = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 32 32", className: "no-color-icon", children: /* @__PURE__ */ k(
    "g",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fillRule: "nonzero",
      fill: "currentColor",
      stroke: "none",
      children: [
        /* @__PURE__ */ a("path", { d: "M2 16c0 7.733 6.267 14 14 14s14-6.267 14-14S23.733 2 16 2 2 8.267 2 16zm-1 0C1 7.716 7.714 1 16 1c8.284 0 15 6.714 15 15 0 8.284-6.714 15-15 15-8.284 0-15-6.714-15-15z" }),
        /* @__PURE__ */ a("path", { d: "M6.354 26.354l-.708-.708 20-20 .708.708z" })
      ]
    }
  ) })
), nl = O(
  /* @__PURE__ */ a(
    "svg",
    {
      className: "selected-icon",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ a("polyline", { points: "20 6 9 17 4 12" })
    }
  )
), rl = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 24", className: "stroke-icon", children: /* @__PURE__ */ k(
    "g",
    {
      xmlns: "http://www.w3.org/2000/svg",
      stroke: "none",
      fillRule: "evenodd",
      fill: "#000",
      children: [
        /* @__PURE__ */ a(
          "path",
          {
            d: "M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0-4c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z",
            fillRule: "nonzero",
            fillOpacity: ".04"
          }
        ),
        /* @__PURE__ */ a(
          "path",
          {
            d: "M12 5V1c1.491 0 2.914.297 4.21.835L14.68 5.53A6.979 6.979 0 0 0 12 5zm4.95 2.048l2.828-2.828a11.016 11.016 0 0 1 2.388 3.568l-3.697 1.53a7.01 7.01 0 0 0-1.519-2.27zM19 12h4c0 1.491-.297 2.914-.835 4.21l-3.696-1.53c.342-.826.531-1.73.531-2.68zm-2.05 4.95l2.828 2.828a11.016 11.016 0 0 1-3.567 2.387l-1.532-3.696a7.01 7.01 0 0 0 2.27-1.52zM12 19v4c-1.491 0-2.914-.297-4.21-.835l1.53-3.696c.826.342 1.73.531 2.68.531zm-4.95-2.05l-2.828 2.828a11.016 11.016 0 0 1-2.387-3.567l3.696-1.532a7.01 7.01 0 0 0 1.52 2.27zM5 12H1c0-1.491.297-2.914.835-4.21L5.53 9.32A6.979 6.979 0 0 0 5 12zm2.05-4.95L4.222 4.222a11.016 11.016 0 0 1 3.567-2.387L9.321 5.53a7.01 7.01 0 0 0-2.27 1.52z",
            fillOpacity: ".12"
          }
        )
      ]
    }
  ) })
), il = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ a(
    "g",
    {
      xmlns: "http://www.w3.org/2000/svg",
      id: "icon-border-white",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      opacity: "0.1",
      children: /* @__PURE__ */ k("g", { id: "Group", children: [
        /* @__PURE__ */ a(
          "path",
          {
            d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z",
            fill: "#000000",
            fillRule: "nonzero"
          }
        ),
        /* @__PURE__ */ a(
          "path",
          {
            d: "M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z",
            fill: "#000000",
            fillRule: "nonzero"
          }
        )
      ] })
    }
  ) })
), ol = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ k("g", { transform: "translate(0 14)", fillRule: "evenodd", fill: "none", children: [
    /* @__PURE__ */ a("path", { d: "M-18-19h60v40h-60z" }),
    /* @__PURE__ */ a("path", { d: "M0 0h24v2H0z", fill: "currentColor" })
  ] }) })
), al = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { transform: "translate(0 14)", fillRule: "evenodd", fill: "none", children: /* @__PURE__ */ a("g", { fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M0 0h6v2H0zM9 0h6v2H9zM18 0h6v2h-6z" }) }) }) })
), sl = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 24 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { transform: "translate(0 14)", fillRule: "evenodd", fill: "none", children: /* @__PURE__ */ k("g", { fill: "currentColor", children: [
    /* @__PURE__ */ a("rect", { rx: "1", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "4", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "8", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "12", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "16", height: "2", width: "2" }),
    /* @__PURE__ */ a("rect", { rx: "1", x: "20", height: "2", width: "2" })
  ] }) }) })
), ll = ({
  currentColor: e
}) => /* @__PURE__ */ a(
  "svg",
  {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    className: "font-color-icon",
    children: /* @__PURE__ */ k(
      "g",
      {
        id: "font-color",
        strokeWidth: "1",
        fillRule: "evenodd",
        stroke: "none",
        fill: "currentColor",
        children: [
          /* @__PURE__ */ a(
            "path",
            {
              id: "secondary-color",
              d: "M1.999 15.011h11.998V13.81H1.999z",
              fill: e || "#333333"
            }
          ),
          /* @__PURE__ */ a(
            "path",
            {
              d: "M6.034 7.59h4.104L8.086 2.297 6.034 7.59zm-.465 1.2l-1.437 3.707H2.845L7.301 1h1.287l-.001.004h.286l4.454 11.492h-1.288L10.603 8.79H5.569z",
              id: "A"
            }
          )
        ]
      }
    )
  }
), cl = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("g", { id: "undo-cion", transform: "translate(1 1)", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M3.84 5.825a.6.6 0 0 1 .063.774l-.064.075a.6.6 0 0 1-.774.063l-.074-.063L.176 3.859a.6.6 0 0 1-.064-.775l.064-.074L3.01.176a.6.6 0 0 1 .912.774l-.063.074-1.795 1.794h6.851a5.1 5.1 0 0 1 .216 10.196l-.216.004h-4a.6.6 0 0 1-.097-1.192l.097-.008h4a3.9 3.9 0 0 0 .201-7.795l-.2-.005H2.033l1.805 1.807z",
      id: "undo-icon-path"
    }
  ) }) }) })
), ul = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("g", { id: "redo-cion", transform: "matrix(-1 0 0 1 15.015 1)", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M3.84 5.825a.6.6 0 0 1 .063.774l-.064.075a.6.6 0 0 1-.774.063l-.074-.063L.176 3.859a.6.6 0 0 1-.064-.775l.064-.074L3.01.176a.6.6 0 0 1 .912.774l-.063.074-1.795 1.794h6.851a5.1 5.1 0 0 1 .216 10.196l-.216.004h-4a.6.6 0 0 1-.097-1.192l.097-.008h4a3.9 3.9 0 0 0 .201-7.795l-.2-.005H2.033l1.805 1.807z",
      id: "redo-icon-path"
    }
  ) }) }) })
), Rt = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      strokeWidth: "1.25",
      d: "M3.333 5.833h13.334M8.333 9.167v5M11.667 9.167v5M4.167 5.833l.833 10c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667l.833-10M7.5 5.833v-2.5c0-.46.373-.833.833-.833h3.334c.46 0 .833.373.833.833v2.5"
    }
  ) })
), dl = O(
  /* @__PURE__ */ a(
    "svg",
    {
      viewBox: "0 0 20 20",
      fill: "none",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ k("g", { strokeWidth: "1.25", children: [
        /* @__PURE__ */ a("path", { d: "M14.375 6.458H8.958a2.5 2.5 0 0 0-2.5 2.5v5.417a2.5 2.5 0 0 0 2.5 2.5h5.417a2.5 2.5 0 0 0 2.5-2.5V8.958a2.5 2.5 0 0 0-2.5-2.5Z" }),
        /* @__PURE__ */ a("path", { d: "M11.667 3.125c.517 0 .986.21 1.325.55.34.338.55.807.55 1.325v1.458H8.333c-.485 0-.927.185-1.26.487-.343.312-.57.75-.609 1.24l-.005 5.357H5a1.87 1.87 0 0 1-1.326-.55 1.87 1.87 0 0 1-.549-1.325V5c0-.518.21-.987.55-1.326.338-.34.807-.549 1.325-.549h6.667Z" })
      ] })
    }
  )
), Kn = O(
  /* @__PURE__ */ a(
    "svg",
    {
      viewBox: "0 0 1024 1024",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ a("path", { d: "M170.794667 896c3.456 0 6.912-0.426667 10.325333-1.28l170.666667-42.666667c7.509333-1.877333 14.378667-5.76 19.84-11.221333L896.128 316.330667c16.128-16.128 25.002667-37.546667 25.002667-60.330667s-8.874667-44.202667-25.002667-60.330667L828.458667 128c-32.256-32.256-88.405333-32.256-120.661334 0L183.296 652.501333a42.794667 42.794667 0 0 0-11.221333 19.797334l-42.666667 170.666666A42.666667 42.666667 0 0 0 170.794667 896z m597.333333-707.669333L835.797333 256l-67.669333 67.669333L700.458667 256l67.669333-67.669333zM251.989333 704.469333l388.138667-388.138666L707.797333 384l-388.181333 388.138667-90.197333 22.528 22.570666-90.197334z" })
    }
  )
), fl = O(
  /* @__PURE__ */ a("svg", { viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a("g", { id: "image", stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M10.496 7c-.824 0-1.572-.675-1.498-1.5 0-.825.674-1.5 1.498-1.5.823 0 1.497.675 1.497 1.5S11.319 7 10.496 7zM13.8 9.476V2.2H2.2v5.432l.1-.078C3.132 6.904 4.029 6.5 5 6.5c.823 0 1.552.27 2.342.778.226.145.449.304.735.518.06.045.546.413.69.52 1.634 1.21 2.833 1.6 4.798 1.207l.235-.047zm0 1.523V10.7c-5 1-6.3-3-8.8-3-1.5 0-2.8 1.6-2.8 1.6v4.6h11.6V11zM14 1c.6 0 1 .536 1 1.071v11.784c0 .642-.4 1.071-1 1.071H2c-.6 0-1-.429-1-1.07V2.07c0-.535.4-1.07 1-1.07h12z" }) }) })
), Ki = O(
  /* @__PURE__ */ a(
    "svg",
    {
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ k("g", { strokeWidth: 1.8, fill: "none", children: [
        /* @__PURE__ */ a("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        /* @__PURE__ */ a("path", { d: "M12 3l-4 7h8z" }),
        /* @__PURE__ */ a("path", { d: "M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" }),
        /* @__PURE__ */ a("path", { d: "M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" })
      ] })
    }
  )
), hl = O(
  /* @__PURE__ */ a(
    "svg",
    {
      stroke: "currentColor",
      viewBox: "0 0 512 512",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ a(
        "path",
        {
          stroke: "none",
          fill: "currentColor",
          d: "M407.48,111.18C335.587,108.103 269.573,152.338 245.08,220C220.587,152.338 154.573,108.103 82.68,111.18C80.285,168.229 107.577,222.632 154.74,254.82C178.908,271.419 193.35,298.951 193.27,328.27L193.27,379.13L296.9,379.13L296.9,328.27C296.816,298.953 311.255,271.42 335.42,254.82C382.596,222.644 409.892,168.233 407.48,111.18Z"
        }
      )
    }
  )
), ml = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", version: "1.1", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a("path", { d: "M14.85,2.5 C15.4851275,2.5 16,3.01487254 16,3.65 L16,12.35 C16,12.9851275 15.4851275,13.5 14.85,13.5 L1.15,13.5 C0.514872538,13.5 0,12.9851275 0,12.35 L0,3.65 C0,3.01487254 0.514872538,2.5 1.15,2.5 L14.85,2.5 Z M14.85,3.7 L1.15,3.7 C1.17735931,3.7 1.2,3.72264069 1.2,3.75 L1.2,12.25 C1.2,12.2773593 1.17735931,12.3 1.15,12.3 L14.85,12.3 C14.8226407,12.3 14.8,12.2773593 14.8,12.25 L14.8,3.75 C14.8,3.72264069 14.8226407,3.7 14.85,3.7 Z M3.5,10.5 L3.5,5.5 L5.25,5.5 L7,7.8 L8.75,5.5 L10.5,5.5 L10.5,10.5 L8.75,10.5 L8.75,7.5 L7,9.8 L5.25,7.5 L5.25,10.5 L3.5,10.5 Z M12.5,10.5 L11,8.5 L12.5,8.5 L12.5,5.5 L11,5.5 L12.5,5.5 L12.5,8.5 L14,8.5 L12.5,10.5 Z" }) }) })
), gl = O(
  /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", children: /* @__PURE__ */ a("g", { stroke: "none", fill: "currentColor", children: /* @__PURE__ */ a(
    "path",
    {
      d: "M12.253 4.13h-1.2v-1a2.8 2.8 0 0 0-5.6 0v4a2.8 2.8 0 0 0 2.8 2.8v1.2a4 4 0 0 1-4-4v-4a4 4 0 0 1 8 0v1zm-8 8h1.2v1a2.8 2.8 0 0 0 5.6 0v-4a2.8 2.8 0 0 0-2.8-2.8v-1.2a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0v-1z",
      transform: "rotate(46 8.253 8.13)"
    }
  ) }) })
), $i = {
  [ze.default]: {
    strokeColor: Ht,
    fill: "#FFFFFF"
  },
  [ze.colorful]: {
    strokeColor: "#06ADBF",
    fill: "#CDEFF2"
  },
  [ze.soft]: {
    strokeColor: "#6D89C1",
    fill: "#DADFEB"
  },
  [ze.retro]: {
    strokeColor: "#E9C358",
    fill: "#F6EDCF"
  },
  [ze.dark]: {
    strokeColor: "#FFFFFF",
    fill: "#434343"
  },
  [ze.starry]: {
    strokeColor: "#42ABE5",
    fill: "#163F5A"
  }
};
var he = /* @__PURE__ */ ((e) => (e.eraser = "eraser", e.nibPen = "nibPen", e.feltTipPen = "feltTipPen", e.artisticBrush = "artisticBrush", e.markerHighlight = "markerHighlight", e))(he || {});
const Zi = "freehand", we = {
  isFreehand: (e) => e.type === Zi
}, pl = {
  zh: {
    // Toolbar items
    "toolbar.hand": "手形工具 — H",
    "toolbar.selection": "选择 — V",
    "toolbar.mind": "思维导图 — M",
    "toolbar.text": "文本 — T",
    "toolbar.pen": "画笔 — P",
    "toolbar.eraser": "橡皮擦 — E",
    "toolbar.arrow": "箭头 — A",
    "toolbar.shape": "形状",
    "toolbar.image": "图片 — Cmd+U",
    "toolbar.extraTools": "更多工具",
    // Zoom controls
    "zoom.in": "放大 — Cmd++",
    "zoom.out": "缩小 — Cmd+-",
    "zoom.fit": "自适应",
    "zoom.100": "缩放至 100%",
    // Themes
    "theme.default": "默认",
    "theme.colorful": "缤纷",
    "theme.soft": "柔和",
    "theme.retro": "复古",
    "theme.dark": "暗夜",
    "theme.starry": "星空",
    // General
    "general.undo": "撤销",
    "general.redo": "重做",
    "general.menu": "应用菜单",
    "general.duplicate": "复制",
    "general.delete": "删除",
    // Language
    "language.switcher": "语言",
    "language.chinese": "中文",
    "language.english": "English",
    // Menu items
    "menu.open": "打开",
    "menu.saveFile": "保存文件",
    "menu.exportImage": "导出图片",
    "menu.exportImage.png": "PNG",
    "menu.exportImage.jpg": "JPG",
    "menu.cleanBoard": "清除画布",
    "menu.github": "GitHub",
    // Dialog translations
    "dialog.mermaid.title": "Mermaid 转 Drawnix",
    "dialog.mermaid.description": "目前仅支持",
    "dialog.mermaid.flowchart": "流程图",
    "dialog.mermaid.sequence": "序列图",
    "dialog.mermaid.class": "类图",
    "dialog.mermaid.otherTypes": "。其他类型在 Drawnix 中将以图片呈现。",
    "dialog.mermaid.syntax": "Mermaid 语法",
    "dialog.mermaid.placeholder": "在此处编写 Mermaid 图表定义...",
    "dialog.mermaid.preview": "预览",
    "dialog.mermaid.insert": "插入",
    "dialog.markdown.description": "支持 Markdown 语法自动转换为思维导图。",
    "dialog.markdown.syntax": "Markdown 语法",
    "dialog.markdown.placeholder": "在此处编写 Markdown 文本定义...",
    "dialog.markdown.preview": "预览",
    "dialog.markdown.insert": "插入",
    "dialog.error.loadMermaid": "加载 Mermaid 库失败",
    // Extra tools menu items
    "extraTools.mermaidToDrawnix": "Mermaid 到 Drawnix",
    "extraTools.markdownToDrawnix": "Markdown 到 Drawnix",
    // Clean confirm dialog
    "cleanConfirm.title": "清除画布",
    "cleanConfirm.description": "这将会清除整个画布。你是否要继续?",
    "cleanConfirm.cancel": "取消",
    "cleanConfirm.ok": "确认"
  },
  en: {
    // Toolbar items
    "toolbar.hand": "Hand — H",
    "toolbar.selection": "Selection — V",
    "toolbar.mind": "Mind — M",
    "toolbar.text": "Text — T",
    "toolbar.pen": "Pen — P",
    "toolbar.eraser": "Eraser — E",
    "toolbar.arrow": "Arrow — A",
    "toolbar.shape": "Shape",
    "toolbar.image": "Image — Cmd+U",
    "toolbar.extraTools": "Extra Tools",
    // Zoom controls
    "zoom.in": "Zoom In — Cmd++",
    "zoom.out": "Zoom Out — Cmd+-",
    "zoom.fit": "Fit to Screen",
    "zoom.100": "Zoom to 100%",
    // Themes
    "theme.default": "Default",
    "theme.colorful": "Colorful",
    "theme.soft": "Soft",
    "theme.retro": "Retro",
    "theme.dark": "Dark",
    "theme.starry": "Starry",
    // General
    "general.undo": "Undo",
    "general.redo": "Redo",
    "general.menu": "App Menu",
    "general.duplicate": "Duplicate",
    "general.delete": "Delete",
    // Language
    "language.switcher": "Language",
    "language.chinese": "中文",
    "language.english": "English",
    // Menu items
    "menu.open": "Open",
    "menu.saveFile": "Save File",
    "menu.exportImage": "Export Image",
    "menu.exportImage.png": "PNG",
    "menu.exportImage.jpg": "JPG",
    "menu.cleanBoard": "Clear Board",
    "menu.github": "GitHub",
    // Dialog translations
    "dialog.mermaid.title": "Mermaid to Drawnix",
    "dialog.mermaid.description": "Currently supports",
    "dialog.mermaid.flowchart": "flowcharts",
    "dialog.mermaid.sequence": "sequence diagrams",
    "dialog.mermaid.class": "class diagrams",
    "dialog.mermaid.otherTypes": ", and other diagram types (rendered as images).",
    "dialog.mermaid.syntax": "Mermaid Syntax",
    "dialog.mermaid.placeholder": "Write your Mermaid chart definition here...",
    "dialog.mermaid.preview": "Preview",
    "dialog.mermaid.insert": "Insert",
    "dialog.markdown.description": "Supports automatic conversion of Markdown syntax to mind map.",
    "dialog.markdown.syntax": "Markdown Syntax",
    "dialog.markdown.placeholder": "Write your Markdown text definition here...",
    "dialog.markdown.preview": "Preview",
    "dialog.markdown.insert": "Insert",
    "dialog.error.loadMermaid": "Failed to load Mermaid library",
    // Extra tools menu items
    "extraTools.mermaidToDrawnix": "Mermaid to Drawnix",
    "extraTools.markdownToDrawnix": "Markdown to Drawnix",
    // Clean confirm dialog
    "cleanConfirm.title": "Clear Board",
    "cleanConfirm.description": "This will clear the entire board. Do you want to continue?",
    "cleanConfirm.cancel": "Cancel",
    "cleanConfirm.ok": "OK"
  }
}, Gi = Rn(void 0), vl = ({
  children: e,
  defaultLanguage: t = "zh"
}) => {
  const [n, r] = F(t), i = (s) => pl[n][s] || s, o = ga(() => ({
    language: n,
    setLanguage: r,
    t: i
  }), [n]);
  return /* @__PURE__ */ a(Gi.Provider, { value: o, children: e });
}, ne = () => {
  const e = Ct(Gi);
  if (!e)
    throw new Error("useI18n must be used within I18nProvider");
  return e;
}, Vi = [
  {
    icon: Kn,
    pointer: he.feltTipPen,
    titleKey: "toolbar.pen"
  },
  {
    icon: Ns,
    pointer: he.eraser,
    titleKey: "toolbar.eraser"
  }
], wl = qn(Vi, 5), yl = ({
  onPointerUp: e
}) => {
  const { t } = ne(), n = ee();
  return /* @__PURE__ */ a(pe, { padding: 1, children: /* @__PURE__ */ a(oe.Col, { gap: 1, children: wl.map((r, i) => /* @__PURE__ */ a(oe.Row, { gap: 1, children: r.map((o, s) => /* @__PURE__ */ a(
    R,
    {
      className: T({ fillable: !1 }),
      selected: n.pointer === o.pointer,
      type: "icon",
      size: "small",
      visible: !0,
      icon: o.icon,
      title: t(o.titleKey),
      "aria-label": t(o.titleKey),
      onPointerDown: () => {
        de(n, fe.dnd), J.updatePointerType(n, o.pointer);
      },
      onPointerUp: () => {
        de(n, fe.drawing), e(o.pointer);
      }
    },
    s
  )) }, i)) }) });
}, Cl = [
  {
    icon: Bs,
    title: "Rectangle — R",
    pointer: le.rectangle
  },
  {
    icon: js,
    title: "Ellipse — O",
    pointer: le.ellipse
  },
  {
    icon: Hs,
    title: "Triangle",
    pointer: le.triangle
  },
  {
    icon: zs,
    title: "Terminal",
    pointer: Oi.terminal
  },
  {
    icon: Us,
    title: "Diamond",
    pointer: le.diamond
  },
  {
    icon: Ws,
    title: "Parallelogram",
    pointer: le.parallelogram
  },
  {
    icon: qs,
    title: "RoundRectangle",
    pointer: le.roundRectangle
  }
], bl = qn(Cl, 5), kl = ({
  onPointerUp: e
}) => {
  const t = ee();
  return /* @__PURE__ */ a(pe, { padding: 1, children: /* @__PURE__ */ a(oe.Col, { gap: 1, children: bl.map((n, r) => /* @__PURE__ */ a(oe.Row, { gap: 1, children: n.map((i, o) => /* @__PURE__ */ a(
    R,
    {
      className: T({ fillable: !1 }),
      type: "icon",
      size: "small",
      visible: !0,
      icon: i.icon,
      title: i.title,
      "aria-label": i.title,
      onPointerDown: () => {
        de(t, fe.dnd), J.updatePointerType(t, i.pointer);
      },
      onPointerUp: () => {
        de(t, fe.drawing), e(i.pointer);
      }
    },
    o
  )) }, r)) }) });
}, xl = [
  {
    icon: Ks,
    title: "Straight Arrow Line",
    pointer: We.straight
  },
  {
    icon: $s,
    title: "Elbow Arrow Line",
    pointer: We.elbow
  },
  {
    icon: Zs,
    title: "Curve Arrow Line",
    pointer: We.curve
  }
], El = ({ onPointerUp: e }) => {
  const t = ee();
  return /* @__PURE__ */ a(pe, { padding: 1, children: /* @__PURE__ */ a(oe.Row, { gap: 1, children: xl.map((n, r) => /* @__PURE__ */ a(
    R,
    {
      className: T({ fillable: !1 }),
      type: "icon",
      size: "small",
      visible: !0,
      icon: n.icon,
      title: n.title,
      "aria-label": n.title,
      onPointerDown: () => {
        de(t, fe.drawing), J.updatePointerType(t, n.pointer);
      },
      onPointerUp: () => {
        e(n.pointer);
      }
    },
    r
  )) }) });
};
function Ol({
  initialOpen: e = !1,
  placement: t = "bottom",
  modal: n,
  sideOffset: r,
  open: i,
  onOpenChange: o
} = {}) {
  const [s, l] = U.useState(e), [c, u] = U.useState(), [d, h] = U.useState(), f = i ?? s, m = o ?? l, p = Wt({
    placement: t,
    open: f,
    onOpenChange: m,
    whileElementsMounted: za,
    middleware: [
      An(r || 4),
      Bn({
        crossAxis: t.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5
      }),
      Ba({ padding: 5 })
    ]
  }), w = p.context, C = Ii(w, {
    enabled: i == null
  }), g = Ri(w), b = Ni(w), y = Ai([C, g, b]);
  return U.useMemo(
    () => ({
      open: f,
      setOpen: m,
      ...y,
      ...p,
      modal: n,
      labelId: c,
      descriptionId: d,
      setLabelId: u,
      setDescriptionId: h
    }),
    [f, m, y, p, n, c, d]
  );
}
const Yi = U.createContext(null), Xi = () => {
  const e = U.useContext(Yi);
  if (e == null)
    throw new Error("Popover components must be wrapped in <Popover />");
  return e;
};
function Pe({
  children: e,
  modal: t = !1,
  ...n
}) {
  const r = Ol({ modal: t, ...n });
  return /* @__PURE__ */ a(Yi.Provider, { value: r, children: e });
}
const Le = U.forwardRef(function({ children: t, asChild: n = !1, ...r }, i) {
  const o = Xi(), s = t.ref, l = Ut([o.refs.setReference, i, s]);
  return n && U.isValidElement(t) ? U.cloneElement(
    t,
    o.getReferenceProps({
      ref: l,
      ...r,
      ...t.props,
      "data-state": o.open ? "open" : "closed"
    })
  ) : /* @__PURE__ */ a(
    "button",
    {
      ref: l,
      type: "button",
      "data-state": o.open ? "open" : "closed",
      ...o.getReferenceProps(r),
      children: t
    }
  );
}), Me = U.forwardRef(function({ container: t, style: n, ...r }, i) {
  const { context: o, ...s } = Xi(), l = Ut([s.refs.setFloating, i]);
  return o.open ? /* @__PURE__ */ a(_i, { root: t, children: /* @__PURE__ */ a(Fi, { context: o, modal: s.modal, children: /* @__PURE__ */ a(
    "div",
    {
      ref: l,
      style: { ...s.floatingStyles, ...n },
      "aria-labelledby": s.labelId,
      "aria-describedby": s.descriptionId,
      ...s.getFloatingProps(r),
      children: r.children
    }
  ) }) }) : null;
});
var He = /* @__PURE__ */ ((e) => (e.mermaidToDrawnix = "mermaidToDrawnix", e.markdownToDrawnix = "markdownToDrawnix", e))(He || {});
const Ji = Rn(null), Ce = () => {
  const e = Ct(Ji);
  if (!e)
    throw new Error(
      "The `useDrawnix` hook must be used inside the <Drawnix> component's context."
    );
  return e;
}, Sl = () => {
  const { appState: e, setAppState: t } = Ce();
  return (n) => {
    t({ ...e, pointer: n });
  };
}, qt = Ue.createContext({}), On = (e = "", t = !1) => `menu-item menu-item-base ${e} ${t ? "menu-item--active" : ""}`.trim(), Qi = (e, t) => {
  const n = Ct(qt);
  return Ps(e, (r) => {
    var o;
    const i = new CustomEvent(nt.MENU_ITEM_SELECT, {
      bubbles: !0,
      cancelable: !0
    });
    t == null || t(i), i.defaultPrevented || (o = n.onSelect) == null || o.call(n, i);
  });
}, ot = ({
  children: e,
  className: t = "",
  onSelect: n,
  style: r
}) => {
  const i = T(`menu ${t}`).trim();
  return /* @__PURE__ */ a(qt.Provider, { value: { onSelect: n }, children: /* @__PURE__ */ a("div", { className: i, style: r, "data-testid": "menu", children: /* @__PURE__ */ a(pe, { className: "menu-container", padding: 2, children: e }) }) });
};
ot.displayName = "Menu";
const eo = ({
  icon: e,
  shortcut: t,
  children: n
}) => /* @__PURE__ */ k(ke, { children: [
  e && /* @__PURE__ */ a("div", { className: "menu-item__icon", children: e }),
  /* @__PURE__ */ a("div", { className: "menu-item__text", children: n }),
  t && /* @__PURE__ */ a("div", { className: "menu-item__shortcut", children: t })
] }), ae = ({
  icon: e,
  onSelect: t,
  children: n,
  shortcut: r,
  className: i,
  selected: o,
  submenu: s,
  ...l
}) => {
  const [c, u] = F(!1), d = xe(), h = Qi(l.onClick, t), f = /* @__PURE__ */ a(eo, { icon: e, shortcut: r, children: n }), m = () => {
    d.current && window.clearTimeout(d.current), u(!0);
  }, p = () => {
    d.current = window.setTimeout(() => {
      u(!1);
    }, 100);
  };
  return s ? /* @__PURE__ */ k(
    Pe,
    {
      open: c,
      onOpenChange: u,
      placement: "right-start",
      children: [
        /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
          "button",
          {
            ...l,
            type: "button",
            className: On(i, o || c),
            title: l.title ?? l["aria-label"],
            onClick: h,
            onMouseEnter: m,
            onMouseLeave: p,
            children: f
          }
        ) }),
        /* @__PURE__ */ a(Me, { onMouseEnter: m, onMouseLeave: p, children: s })
      ]
    }
  ) : /* @__PURE__ */ a(
    "button",
    {
      ...l,
      onClick: h,
      type: "button",
      className: On(i, o),
      title: l.title ?? l["aria-label"],
      children: f
    }
  );
};
ae.displayName = "MenuItem";
const to = ({
  children: e
}) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      display: "inline-flex",
      marginLeft: "auto",
      padding: "2px 4px",
      background: "var(--color-promo)",
      color: "var(--color-surface-lowest)",
      borderRadius: 6,
      fontSize: 9,
      fontFamily: "Cascadia, monospace"
    },
    children: e
  }
);
to.displayName = "MenuItemBadge";
ae.Badge = to;
const no = () => {
  const { appState: e, setAppState: t } = Ce(), { t: n } = ne();
  return /* @__PURE__ */ a(
    ae,
    {
      "data-testid": "marmaid-to-drawnix-button",
      onSelect: () => {
        t({
          ...e,
          openDialogType: He.mermaidToDrawnix
        });
      },
      icon: hl,
      "aria-label": n("extraTools.mermaidToDrawnix"),
      children: n("extraTools.mermaidToDrawnix")
    }
  );
};
no.displayName = "MermaidToDrawnix";
const ro = () => {
  const { appState: e, setAppState: t } = Ce(), { t: n } = ne();
  return /* @__PURE__ */ a(
    ae,
    {
      "data-testid": "markdown-to-drawnix-button",
      onSelect: () => {
        t({
          ...e,
          openDialogType: He.markdownToDrawnix
        });
      },
      icon: ml,
      "aria-label": n("extraTools.markdownToDrawnix"),
      children: n("extraTools.markdownToDrawnix")
    }
  );
};
ro.displayName = "MarkdownToDrawnix";
const Pl = () => {
  const e = ee(), { t } = ne(), n = _.getBoardContainer(e), [r, i] = F(!1);
  return /* @__PURE__ */ k(
    Pe,
    {
      sideOffset: 12,
      open: r,
      onOpenChange: (o) => {
        i(o);
      },
      placement: "bottom-start",
      children: [
        /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
          R,
          {
            type: "icon",
            visible: !0,
            selected: r,
            icon: Ki,
            title: t("toolbar.extraTools"),
            "aria-label": t("toolbar.extraTools"),
            onPointerDown: () => {
              i(!r);
            }
          }
        ) }),
        /* @__PURE__ */ a(Me, { container: n, children: /* @__PURE__ */ k(
          ot,
          {
            onSelect: () => {
              i(!1);
            },
            children: [
              /* @__PURE__ */ a(no, {}),
              /* @__PURE__ */ a(ro, {})
            ]
          }
        ) })
      ]
    },
    0
  );
}, Ft = (e, t) => {
  const n = Ie(e);
  Ms(e, {
    elements: n.length > 0 ? n : void 0,
    fillStyle: t ? "transparent" : "white"
  }).then((r) => {
    if (r) {
      const i = t ? "png" : "jpg", o = Ls(r), s = `drawnix-${(/* @__PURE__ */ new Date()).getTime()}.${i}`;
      Ds(o, s);
    }
  });
}, io = async (e) => {
  const t = await Hi({
    description: "Image",
    extensions: Object.keys(
      jn
    )
  });
  En(e, t);
}, Xt = (e) => e === ye.hand || e === ye.selection, mr = [
  {
    icon: Ts,
    pointer: ye.hand,
    titleKey: "toolbar.hand"
  },
  {
    icon: _s,
    pointer: ye.selection,
    titleKey: "toolbar.selection"
  },
  {
    icon: Fs,
    pointer: kn.mind,
    titleKey: "toolbar.mind"
  },
  {
    icon: Rs,
    pointer: le.text,
    titleKey: "toolbar.text"
  },
  {
    icon: Kn,
    pointer: he.feltTipPen,
    titleKey: "toolbar.pen",
    key: "freehand"
    /* freehand */
  },
  {
    icon: As,
    titleKey: "toolbar.arrow",
    key: "arrow",
    pointer: We.straight
  },
  {
    icon: Is,
    titleKey: "toolbar.shape",
    key: "shape",
    pointer: le.rectangle
  },
  {
    icon: fl,
    titleKey: "toolbar.image",
    key: "image"
  },
  {
    icon: Ki,
    titleKey: "toolbar.extraTools",
    key: "extra-tools"
  }
], Ll = (e) => Object.keys(We).includes(e.pointer), Ml = (e) => Object.keys(le).includes(e.pointer) || Object.keys(Oi).includes(e.pointer), Dl = () => {
  const e = ee(), { appState: t } = Ce(), { t: n } = ne(), r = Sl(), i = _.getBoardContainer(e), [o, s] = F(!1), [l, c] = F(!1), [u, d] = F(!1), [h, f] = F(
    mr.find(
      (g) => g.key === "freehand"
      /* freehand */
    )
  ), m = (g) => {
    de(e, fe.dnd), J.updatePointerType(e, g), r(g);
  }, p = () => {
    de(e, fe.drawing);
  }, w = (g) => _.isPointer(e, g.pointer) && !l && !u && !o, C = (g) => _.isInPointer(g, [
    he.feltTipPen,
    he.eraser
  ]);
  return /* @__PURE__ */ a(
    pe,
    {
      padding: 1,
      className: T("draw-toolbar", Ae),
      children: /* @__PURE__ */ a(oe.Row, { gap: 1, children: mr.map((g, b) => t.isMobile && g.pointer === ye.hand ? /* @__PURE__ */ a(ke, {}) : g.key === "freehand" ? /* @__PURE__ */ k(
        Pe,
        {
          open: o || C(e),
          sideOffset: 12,
          onOpenChange: (y) => {
            s(y);
          },
          children: [
            /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
              R,
              {
                type: "icon",
                visible: !0,
                selected: o || C(e),
                icon: h.icon,
                title: h.titleKey ? n(h.titleKey) : "Freehand",
                "aria-label": h.titleKey ? n(h.titleKey) : "Freehand",
                onPointerDown: () => {
                  s(!o), m(h.pointer);
                },
                onPointerUp: () => {
                  p();
                }
              }
            ) }),
            /* @__PURE__ */ a(Me, { container: i, children: /* @__PURE__ */ a(
              yl,
              {
                onPointerUp: (y) => {
                  r(y), f(
                    Vi.find((x) => x.pointer === y)
                  );
                }
              }
            ) })
          ]
        },
        b
      ) : g.key === "shape" ? /* @__PURE__ */ k(
        Pe,
        {
          open: u,
          sideOffset: 12,
          onOpenChange: (y) => {
            d(y);
          },
          children: [
            /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
              R,
              {
                type: "icon",
                visible: !0,
                selected: u || Ml(e) && !_.isPointer(e, le.text),
                icon: g.icon,
                title: g.titleKey ? n(g.titleKey) : "Shape",
                "aria-label": g.titleKey ? n(g.titleKey) : "Shape",
                onPointerDown: () => {
                  d(!u);
                }
              }
            ) }),
            /* @__PURE__ */ a(Me, { container: i, children: /* @__PURE__ */ a(
              kl,
              {
                onPointerUp: (y) => {
                  d(!1), r(y);
                }
              }
            ) })
          ]
        },
        b
      ) : g.key === "arrow" ? /* @__PURE__ */ k(
        Pe,
        {
          open: l,
          sideOffset: 12,
          onOpenChange: (y) => {
            c(y);
          },
          children: [
            /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
              R,
              {
                type: "icon",
                visible: !0,
                selected: l || Ll(e),
                icon: g.icon,
                title: g.titleKey ? n(g.titleKey) : "",
                "aria-label": g.titleKey ? n(g.titleKey) : "",
                onPointerDown: () => {
                  c(!l);
                }
              }
            ) }),
            /* @__PURE__ */ a(Me, { container: i, children: /* @__PURE__ */ a(
              El,
              {
                onPointerUp: (y) => {
                  c(!1), r(y);
                }
              }
            ) })
          ]
        },
        b
      ) : g.key === "extra-tools" ? /* @__PURE__ */ a(Pl, {}, b) : /* @__PURE__ */ a(
        R,
        {
          type: "radio",
          icon: g.icon,
          checked: w(g),
          title: g.titleKey ? n(g.titleKey) : "",
          "aria-label": g.titleKey ? n(g.titleKey) : "",
          onPointerDown: () => {
            g.pointer && !Xt(g.pointer) && m(g.pointer);
          },
          onPointerUp: () => {
            g.pointer && !Xt(g.pointer) ? p() : g.pointer && Xt(g.pointer) && (J.updatePointerType(e, g.pointer), r(g.pointer)), g.key === "image" && io(e);
          }
        },
        b
      )) })
    }
  );
}, Tl = () => {
  var o;
  const e = ee(), { t } = ne(), n = _.getBoardContainer(e), [r, i] = F(!1);
  return /* @__PURE__ */ a(
    pe,
    {
      padding: 1,
      className: T("zoom-toolbar", Ae),
      children: /* @__PURE__ */ k(oe.Row, { gap: 1, children: [
        /* @__PURE__ */ a(
          R,
          {
            type: "button",
            icon: Ys,
            visible: !0,
            title: t("zoom.out"),
            "aria-label": t("zoom.out"),
            onPointerUp: () => {
              J.updateZoom(e, e.viewport.zoom - 0.1);
            },
            className: "zoom-out-button"
          },
          0
        ),
        /* @__PURE__ */ k(
          Pe,
          {
            sideOffset: 12,
            open: r,
            onOpenChange: (s) => {
              i(s);
            },
            placement: "bottom-end",
            children: [
              /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ k(
                "div",
                {
                  title: t("zoom.fit"),
                  "aria-label": t("zoom.fit"),
                  className: T("zoom-menu-trigger", {
                    active: r
                  }),
                  onPointerUp: () => {
                    i(!r);
                  },
                  children: [
                    Number(((((o = e == null ? void 0 : e.viewport) == null ? void 0 : o.zoom) || 1) * 100).toFixed(0)),
                    "%"
                  ]
                },
                1
              ) }),
              /* @__PURE__ */ a(Me, { container: n, children: /* @__PURE__ */ k(
                ot,
                {
                  onSelect: () => {
                    i(!1);
                  },
                  children: [
                    /* @__PURE__ */ a(
                      ae,
                      {
                        "data-testid": "open-button",
                        onSelect: () => {
                          J.fitViewport(e);
                        },
                        "aria-label": t("zoom.fit"),
                        shortcut: "Cmd+Shift+=",
                        children: t("zoom.fit")
                      }
                    ),
                    /* @__PURE__ */ a(
                      ae,
                      {
                        "data-testid": "open-button",
                        onSelect: () => {
                          J.updateZoom(e, 1);
                        },
                        "aria-label": t("zoom.100"),
                        shortcut: "Cmd+0",
                        children: t("zoom.100")
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ a(
          R,
          {
            type: "button",
            icon: Xs,
            visible: !0,
            title: t("zoom.in"),
            "aria-label": t("zoom.in"),
            onPointerUp: () => {
              J.updateZoom(e, e.viewport.zoom + 0.1);
            },
            className: "zoom-in-button"
          },
          2
        )
      ] })
    }
  );
}, oo = "TRANSPARENT", $n = "NO_COLOR", Zn = "#FFFFFF", ao = [
  { name: "Topic Color", value: $n },
  { name: "Basic Black", value: Ht },
  { name: "White", value: Zn },
  { name: "Gray", value: "#808080" },
  { name: "Deep Blue", value: "#1E90FF" },
  { name: "Red", value: "#FF4500" },
  { name: "Green", value: "#2ECC71" },
  { name: "Yellow", value: "#FFD700" },
  { name: "Purple", value: "#8A2BE2" },
  { name: "Orange", value: "#FFA500" },
  { name: "Pastel Pink", value: "#FFB3BA" },
  { name: "Cyan", value: "#00CED1" },
  { name: "Brown", value: "#8B4513" },
  { name: "Forest Green", value: "#228B22" },
  { name: "Light Gray", value: "#D3D3D3" }
];
function _l(e) {
  return Math.round((100 - e) / 100 * 255);
}
function Fl(e) {
  return Math.round((1 - e / 255) * 100);
}
function at(e, t) {
  const r = _l(100 - t).toString(16).padStart(2, "0");
  return `${e}${r}`;
}
function st(e) {
  e = e.replace(/^#/, "");
  let t;
  if (e.length === 8)
    t = parseInt(e.slice(6, 8), 16);
  else if (e.length === 4)
    t = parseInt(e.slice(3, 4).repeat(2), 16);
  else
    return 100;
  return 100 - Fl(t);
}
function Il(e) {
  return e !== "none";
}
function Ze(e) {
  const t = e.replace(/^#/, "").toUpperCase();
  return t.length === 8 ? "#" + t.slice(0, 6) : t.length === 4 ? "#" + t.slice(0, 3) : t.length === 6 || t.length === 3 ? "#" + t : e;
}
function ou(e) {
  return e === oo;
}
function so(e) {
  return e === Zn;
}
function lo(e) {
  return e === 0;
}
function xt(e) {
  return e === 100;
}
function Qe(e) {
  return e === $n;
}
function Rl(e) {
  return !e || e === Ht;
}
const Nl = ({
  min: e = 0,
  max: t = 100,
  step: n = 1,
  defaultValue: r = 100,
  disabled: i = !1,
  onChange: o,
  beforeStart: s,
  afterEnd: l
}) => {
  const [c, u] = F(!1), [d, h] = F(r), f = xe(0), m = xe(null), p = xe(null);
  ie(() => {
    if (m.current && p.current) {
      const b = m.current.getBoundingClientRect(), y = p.current.getBoundingClientRect();
      f.current = Qo(
        y.width / 2 / b.width * 100
      );
    }
  }, [p, m]), ie(() => {
    h(r);
  }, [r]);
  const w = ar(
    Ha(
      (b) => {
        if (m.current && p.current) {
          const y = m.current.getBoundingClientRect(), x = b.clientX - y.left;
          let E = Math.min(Math.max(x / y.width, 0), 1);
          E >= (100 - f.current) / 100 ? E = 1 : E <= f.current / 100 && (E = 0);
          const M = Math.round(E * (t - e) / n) * n + e;
          h(M), o && o(M);
        }
      },
      50,
      { leading: !0, trailing: !0 }
    ),
    [e, t, n, o]
  ), C = ar(() => {
    const b = (x) => {
      u(!0), w(x);
    }, y = () => {
      document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", y), l && l(), setTimeout(() => {
        u(!1);
      }, 0);
    };
    document.addEventListener("pointermove", b), document.addEventListener("pointerup", y);
  }, [w]);
  let g = (d - e) / (t - e) * 100;
  return g >= 100 - f.current && (g = 100 - f.current), g <= f.current && (g = f.current), /* @__PURE__ */ a("div", { className: T("slider-container", { disabled: i }), children: /* @__PURE__ */ k(
    "div",
    {
      ref: m,
      className: "slider-track",
      onClick: (b) => {
        i || c || w(b);
      },
      onPointerDown: (b) => {
        b.preventDefault(), !i && (s && s(), C());
      },
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "slider-range",
            style: {
              width: `${g}%`
            }
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            ref: p,
            className: "slider-thumb",
            style: {
              left: `${g}%`
            }
          }
        )
      ]
    }
  ) });
}, gr = qn(ao, 4), Gn = Ue.forwardRef((e, t) => {
  const n = ee(), { currentColor: r, onColorChange: i, onOpacityChange: o } = e, [s, l] = F(
    r && Ze(r) || gr[0][0].value
  ), [c, u] = F(() => {
    const d = r && st(r);
    return In(d) ? 100 : d;
  });
  return /* @__PURE__ */ k(oe.Col, { gap: 3, children: [
    /* @__PURE__ */ a(
      Nl,
      {
        step: 5,
        defaultValue: c,
        onChange: (d) => {
          u(d), o(d);
        },
        beforeStart: () => {
          nr.set(n, !0), ea.setSplittingOnce(n, !0);
        },
        afterEnd: () => {
          nr.set(n, !1);
        },
        disabled: s === ao[0].value
      }
    ),
    /* @__PURE__ */ a(oe.Col, { gap: 2, children: gr.map((d, h) => /* @__PURE__ */ a(oe.Row, { gap: 2, children: d.map((f) => /* @__PURE__ */ k(
      "button",
      {
        className: `color-select-item ${s === f.value ? "active" : ""} ${Qe(f.value) ? "no-color" : ""}`,
        style: {
          backgroundColor: Qe(f.value) ? oo : f.value,
          color: Rl(f.value) ? Zn : Ht
        },
        onClick: () => {
          l(f.value), f.value === $n && u(100), i(f.value);
        },
        title: f.name,
        children: [
          Qe(f.value) && tl,
          s === f.value && nl
        ]
      },
      f.value
    )) }, h)) })
  ] });
}), co = (e, t) => Ee.isMindElement(e, t) || Q.isDrawElement(t) && Si(t) || Nn(e, t), uo = (e, t) => {
  let n = t.fill;
  return n || (Ee.isMindElement(e, t) && (n = Ra(e, t)), (Q.isDrawElement(t) || Q.isCustomGeometryElement(e, t)) && (n = Oa(e, t))), n;
}, fo = (e, t) => {
  let n = t.strokeColor;
  return n || (Ee.isMindElement(e, t) && (n = Mi(e, t)), (Q.isDrawElement(t) || Q.isCustomGeometryElement(e, t)) && (n = Pi(e, t))), n;
}, au = (e, t) => zn(t).color, Al = (e, t) => {
  bt.setFillColor(e, null, {
    getMemorizeKey: kt,
    callback: (n, r) => {
      if (!co(e, n))
        return;
      const i = uo(e, n);
      if (!Il(i))
        return;
      const o = Ze(i), s = xt(t) ? o : at(o, t);
      Fe.setNode(e, { fill: s }, r);
    }
  });
}, Bl = (e, t) => {
  bt.setFillColor(e, null, {
    getMemorizeKey: kt,
    callback: (n, r) => {
      if (!co(e, n))
        return;
      const i = uo(e, n), o = st(i);
      Qe(t) ? Fe.setNode(e, { fill: null }, r) : In(o) || xt(o) ? Fe.setNode(e, { fill: t }, r) : Fe.setNode(
        e,
        { fill: at(t, o) },
        r
      );
    }
  });
}, zl = (e, t) => {
  bt.setStrokeColor(e, null, {
    getMemorizeKey: kt,
    callback: (n, r) => {
      const i = fo(e, n), o = Ze(i), s = xt(t) ? o : at(o, t);
      Fe.setNode(e, { strokeColor: s }, r);
    }
  });
}, jl = (e, t) => {
  bt.setStrokeColor(e, null, {
    getMemorizeKey: kt,
    callback: (n, r) => {
      const i = fo(e, n), o = st(i);
      Qe(t) ? Fe.setNode(e, { strokeColor: null }, r) : In(o) || xt(o) ? Fe.setNode(e, { strokeColor: t }, r) : Fe.setNode(
        e,
        { strokeColor: at(t, o) },
        r
      );
    }
  });
}, Hl = (e, t, n) => {
  const r = st(t);
  Qe(n) ? xn.setTextColor(e, null) : xn.setTextColor(
    e,
    at(n, r)
  );
}, Ul = (e, t, n) => {
  const r = Ze(t), i = xt(n) ? r : at(r, n);
  xn.setTextColor(e, i);
}, Wl = ({
  board: e,
  currentColor: t,
  fontColorIcon: n,
  title: r
}) => {
  const [i, o] = F(!1), s = _.getBoardContainer(e);
  return /* @__PURE__ */ k(
    Pe,
    {
      sideOffset: 12,
      open: i,
      onOpenChange: (l) => {
        o(l);
      },
      placement: "top",
      children: [
        /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
          R,
          {
            className: T("property-button"),
            selected: i,
            visible: !0,
            icon: n,
            type: "button",
            title: r,
            "aria-label": r,
            onPointerUp: () => {
              o(!i);
            }
          }
        ) }),
        /* @__PURE__ */ a(Me, { container: s, children: /* @__PURE__ */ a(
          pe,
          {
            padding: 4,
            className: T(`${Ae}`),
            children: /* @__PURE__ */ a(
              Gn,
              {
                onColorChange: (l) => {
                  Hl(
                    e,
                    t || l,
                    l
                  );
                },
                onOpacityChange: (l) => {
                  t && Ul(e, t, l);
                },
                currentColor: t
              }
            )
          }
        ) })
      ]
    }
  );
}, ql = ({
  board: e,
  currentColor: t,
  title: n,
  hasStrokeStyle: r,
  children: i
}) => {
  const [o, s] = F(!1), l = t && Ze(t), c = t ? st(t) : 100, u = _.getBoardContainer(e), d = lo(c) ? rl : so(l) ? il : void 0, h = (f) => {
    bt.setStrokeStyle(e, f, { getMemorizeKey: kt });
  };
  return /* @__PURE__ */ k(
    Pe,
    {
      sideOffset: 12,
      open: o,
      onOpenChange: (f) => {
        s(f);
      },
      placement: "top",
      children: [
        /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
          R,
          {
            className: T("property-button"),
            visible: !0,
            icon: d,
            type: "button",
            title: n,
            "aria-label": n,
            onPointerUp: () => {
              s(!o);
            },
            children: !d && i
          }
        ) }),
        /* @__PURE__ */ a(Me, { container: u, children: /* @__PURE__ */ a(
          pe,
          {
            padding: 4,
            className: T(
              `${Ae}`,
              "stroke-setting",
              { "has-stroke-style": r }
            ),
            children: /* @__PURE__ */ k(oe.Col, { children: [
              r && /* @__PURE__ */ k(oe.Row, { className: T("stroke-style-picker"), children: [
                /* @__PURE__ */ a(
                  R,
                  {
                    visible: !0,
                    icon: ol,
                    type: "button",
                    title: n,
                    "aria-label": n,
                    onPointerUp: () => {
                      h(Yt.solid);
                    }
                  }
                ),
                /* @__PURE__ */ a(
                  R,
                  {
                    visible: !0,
                    icon: al,
                    type: "button",
                    title: n,
                    "aria-label": n,
                    onPointerUp: () => {
                      h(Yt.dashed);
                    }
                  }
                ),
                /* @__PURE__ */ a(
                  R,
                  {
                    visible: !0,
                    icon: sl,
                    type: "button",
                    title: n,
                    "aria-label": n,
                    onPointerUp: () => {
                      h(Yt.dotted);
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ a(
                Gn,
                {
                  onColorChange: (f) => {
                    jl(e, f);
                  },
                  onOpacityChange: (f) => {
                    zl(e, f);
                  },
                  currentColor: t
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}, Kl = ({
  board: e,
  currentColor: t,
  title: n,
  children: r
}) => {
  const [i, o] = F(!1), s = t && Ze(t), l = t ? st(t) : 100, c = _.getBoardContainer(e), u = !s || lo(l) ? el : void 0;
  return /* @__PURE__ */ k(
    Pe,
    {
      sideOffset: 12,
      open: i,
      onOpenChange: (d) => {
        o(d);
      },
      placement: "top",
      children: [
        /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
          R,
          {
            className: T("property-button"),
            visible: !0,
            icon: u,
            type: "button",
            title: n,
            "aria-label": n,
            onPointerUp: () => {
              o(!i);
            },
            children: !u && r
          }
        ) }),
        /* @__PURE__ */ a(Me, { container: c, children: /* @__PURE__ */ a(
          pe,
          {
            padding: 4,
            className: T(`${Ae}`),
            children: /* @__PURE__ */ a(
              Gn,
              {
                onColorChange: (d) => {
                  Bl(e, d);
                },
                onOpacityChange: (d) => {
                  Al(e, d);
                },
                currentColor: t
              }
            )
          }
        ) })
      ]
    }
  );
};
var Jt, pr;
function Vn() {
  if (pr) return Jt;
  pr = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Jt = e, Jt;
}
var Qt, vr;
function $l() {
  if (vr) return Qt;
  vr = 1;
  var e = typeof Lt == "object" && Lt && Lt.Object === Object && Lt;
  return Qt = e, Qt;
}
var en, wr;
function ho() {
  if (wr) return en;
  wr = 1;
  var e = $l(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return en = n, en;
}
var tn, yr;
function Zl() {
  if (yr) return tn;
  yr = 1;
  var e = ho(), t = function() {
    return e.Date.now();
  };
  return tn = t, tn;
}
var nn, Cr;
function Gl() {
  if (Cr) return nn;
  Cr = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return nn = t, nn;
}
var rn, br;
function Vl() {
  if (br) return rn;
  br = 1;
  var e = Gl(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return rn = n, rn;
}
var on, kr;
function mo() {
  if (kr) return on;
  kr = 1;
  var e = ho(), t = e.Symbol;
  return on = t, on;
}
var an, xr;
function Yl() {
  if (xr) return an;
  xr = 1;
  var e = mo(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, i = e ? e.toStringTag : void 0;
  function o(s) {
    var l = n.call(s, i), c = s[i];
    try {
      s[i] = void 0;
      var u = !0;
    } catch {
    }
    var d = r.call(s);
    return u && (l ? s[i] = c : delete s[i]), d;
  }
  return an = o, an;
}
var sn, Er;
function Xl() {
  if (Er) return sn;
  Er = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return sn = n, sn;
}
var ln, Or;
function Jl() {
  if (Or) return ln;
  Or = 1;
  var e = mo(), t = Yl(), n = Xl(), r = "[object Null]", i = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function s(l) {
    return l == null ? l === void 0 ? i : r : o && o in Object(l) ? t(l) : n(l);
  }
  return ln = s, ln;
}
var cn, Sr;
function Ql() {
  if (Sr) return cn;
  Sr = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return cn = e, cn;
}
var un, Pr;
function ec() {
  if (Pr) return un;
  Pr = 1;
  var e = Jl(), t = Ql(), n = "[object Symbol]";
  function r(i) {
    return typeof i == "symbol" || t(i) && e(i) == n;
  }
  return un = r, un;
}
var dn, Lr;
function tc() {
  if (Lr) return dn;
  Lr = 1;
  var e = Vl(), t = Vn(), n = ec(), r = NaN, i = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, l = parseInt;
  function c(u) {
    if (typeof u == "number")
      return u;
    if (n(u))
      return r;
    if (t(u)) {
      var d = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = t(d) ? d + "" : d;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = e(u);
    var h = o.test(u);
    return h || s.test(u) ? l(u.slice(2), h ? 2 : 8) : i.test(u) ? r : +u;
  }
  return dn = c, dn;
}
var fn, Mr;
function go() {
  if (Mr) return fn;
  Mr = 1;
  var e = Vn(), t = Zl(), n = tc(), r = "Expected a function", i = Math.max, o = Math.min;
  function s(l, c, u) {
    var d, h, f, m, p, w, C = 0, g = !1, b = !1, y = !0;
    if (typeof l != "function")
      throw new TypeError(r);
    c = n(c) || 0, e(u) && (g = !!u.leading, b = "maxWait" in u, f = b ? i(n(u.maxWait) || 0, c) : f, y = "trailing" in u ? !!u.trailing : y);
    function x(N) {
      var ue = d, ve = h;
      return d = h = void 0, C = N, m = l.apply(ve, ue), m;
    }
    function E(N) {
      return C = N, p = setTimeout(D, c), g ? x(N) : m;
    }
    function M(N) {
      var ue = N - w, ve = N - C, Be = c - ue;
      return b ? o(Be, f - ve) : Be;
    }
    function Y(N) {
      var ue = N - w, ve = N - C;
      return w === void 0 || ue >= c || ue < 0 || b && ve >= f;
    }
    function D() {
      var N = t();
      if (Y(N))
        return G(N);
      p = setTimeout(D, M(N));
    }
    function G(N) {
      return p = void 0, y && d ? x(N) : (d = h = void 0, m);
    }
    function se() {
      p !== void 0 && clearTimeout(p), C = 0, d = w = h = p = void 0;
    }
    function X() {
      return p === void 0 ? m : G(t());
    }
    function $() {
      var N = t(), ue = Y(N);
      if (d = arguments, h = this, w = N, ue) {
        if (p === void 0)
          return E(w);
        if (b)
          return clearTimeout(p), p = setTimeout(D, c), x(w);
      }
      return p === void 0 && (p = setTimeout(D, c)), m;
    }
    return $.cancel = se, $.flush = X, $;
  }
  return fn = s, fn;
}
go();
var hn, Dr;
function nc() {
  if (Dr) return hn;
  Dr = 1;
  var e = go(), t = Vn(), n = "Expected a function";
  function r(i, o, s) {
    var l = !0, c = !0;
    if (typeof i != "function")
      throw new TypeError(n);
    return t(s) && (l = "leading" in s ? !!s.leading : l, c = "trailing" in s ? !!s.trailing : c), e(i, o, {
      leading: l,
      maxWait: o,
      trailing: c
    });
  }
  return hn = r, hn;
}
nc();
var po = Symbol.for("immer-nothing"), Tr = Symbol.for("immer-draftable"), me = Symbol.for("immer-state"), rc = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function ce(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = rc[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var rt = Object.getPrototypeOf;
function it(e) {
  return !!e && !!e[me];
}
function Ke(e) {
  var t;
  return e ? vo(e) || Array.isArray(e) || !!e[Tr] || !!((t = e.constructor) != null && t[Tr]) || $t(e) || Zt(e) : !1;
}
var ic = Object.prototype.constructor.toString();
function vo(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = rt(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === ic;
}
function Nt(e, t) {
  Kt(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Kt(e) {
  const t = e[me];
  return t ? t.type_ : Array.isArray(e) ? 1 : $t(e) ? 2 : Zt(e) ? 3 : 0;
}
function Sn(e, t) {
  return Kt(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function wo(e, t, n) {
  const r = Kt(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function oc(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function $t(e) {
  return e instanceof Map;
}
function Zt(e) {
  return e instanceof Set;
}
function je(e) {
  return e.copy_ || e.base_;
}
function Pn(e, t) {
  if ($t(e))
    return new Map(e);
  if (Zt(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = vo(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[me];
    let i = Reflect.ownKeys(r);
    for (let o = 0; o < i.length; o++) {
      const s = i[o], l = r[s];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (r[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[s]
      });
    }
    return Object.create(rt(e), r);
  } else {
    const r = rt(e);
    if (r !== null && n)
      return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function Yn(e, t = !1) {
  return Gt(e) || it(e) || !Ke(e) || (Kt(e) > 1 && (e.set = e.add = e.clear = e.delete = ac), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Yn(r, !0))), e;
}
function ac() {
  ce(2);
}
function Gt(e) {
  return Object.isFrozen(e);
}
var sc = {};
function $e(e) {
  const t = sc[e];
  return t || ce(0, e), t;
}
var ht;
function yo() {
  return ht;
}
function lc(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function _r(e, t) {
  t && ($e("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ln(e) {
  Mn(e), e.drafts_.forEach(cc), e.drafts_ = null;
}
function Mn(e) {
  e === ht && (ht = e.parent_);
}
function Fr(e) {
  return ht = lc(ht, e);
}
function cc(e) {
  const t = e[me];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Ir(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[me].modified_ && (Ln(t), ce(4)), Ke(e) && (e = At(t, e), t.parent_ || Bt(t, e)), t.patches_ && $e("Patches").generateReplacementPatches_(
    n[me].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = At(t, n, []), Ln(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== po ? e : void 0;
}
function At(e, t, n) {
  if (Gt(t))
    return t;
  const r = t[me];
  if (!r)
    return Nt(
      t,
      (i, o) => Rr(e, r, t, i, o, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Bt(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i, s = !1;
    r.type_ === 3 && (o = new Set(i), i.clear(), s = !0), Nt(
      o,
      (l, c) => Rr(e, r, i, l, c, n, s)
    ), Bt(e, i, !1), n && e.patches_ && $e("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Rr(e, t, n, r, i, o, s) {
  if (process.env.NODE_ENV !== "production" && i === n && ce(5), it(i)) {
    const l = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Sn(t.assigned_, r) ? o.concat(r) : void 0, c = At(e, i, l);
    if (wo(n, r, c), it(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else s && n.add(i);
  if (Ke(i) && !Gt(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    At(e, i), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Bt(e, i);
  }
}
function Bt(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Yn(t, n);
}
function uc(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : yo(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = r, o = Xn;
  n && (i = [r], o = mt);
  const { revoke: s, proxy: l } = Proxy.revocable(i, o);
  return r.draft_ = l, r.revoke_ = s, l;
}
var Xn = {
  get(e, t) {
    if (t === me)
      return e;
    const n = je(e);
    if (!Sn(n, t))
      return dc(e, n, t);
    const r = n[t];
    return e.finalized_ || !Ke(r) ? r : r === mn(e.base_, t) ? (gn(e), e.copy_[t] = Tn(r, e)) : r;
  },
  has(e, t) {
    return t in je(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(je(e));
  },
  set(e, t, n) {
    const r = Co(je(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = mn(je(e), t), o = i == null ? void 0 : i[me];
      if (o && o.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (oc(n, i) && (n !== void 0 || Sn(e.base_, t)))
        return !0;
      gn(e), Dn(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return mn(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, gn(e), Dn(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = je(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    ce(11);
  },
  getPrototypeOf(e) {
    return rt(e.base_);
  },
  setPrototypeOf() {
    ce(12);
  }
}, mt = {};
Nt(Xn, (e, t) => {
  mt[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
mt.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && ce(13), mt.set.call(this, e, t, void 0);
};
mt.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && ce(14), Xn.set.call(this, e[0], t, n, e[0]);
};
function mn(e, t) {
  const n = e[me];
  return (n ? je(n) : e)[t];
}
function dc(e, t, n) {
  var i;
  const r = Co(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function Co(e, t) {
  if (!(t in e))
    return;
  let n = rt(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = rt(n);
  }
}
function Dn(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Dn(e.parent_));
}
function gn(e) {
  e.copy_ || (e.copy_ = Pn(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var fc = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const o = n;
        n = t;
        const s = this;
        return function(c = o, ...u) {
          return s.produce(c, (d) => n.call(this, d, ...u));
        };
      }
      typeof n != "function" && ce(6), r !== void 0 && typeof r != "function" && ce(7);
      let i;
      if (Ke(t)) {
        const o = Fr(this), s = Tn(t, void 0);
        let l = !0;
        try {
          i = n(s), l = !1;
        } finally {
          l ? Ln(o) : Mn(o);
        }
        return _r(o, r), Ir(i, o);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === po && (i = void 0), this.autoFreeze_ && Yn(i, !0), r) {
          const o = [], s = [];
          $e("Patches").generateReplacementPatches_(t, i, o, s), r(o, s);
        }
        return i;
      } else
        ce(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (s, ...l) => this.produceWithPatches(s, (c) => t(c, ...l));
      let r, i;
      return [this.produce(t, n, (s, l) => {
        r = s, i = l;
      }), r, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ke(e) || ce(8), it(e) && (e = hc(e));
    const t = Fr(this), n = Tn(e, void 0);
    return n[me].isManual_ = !0, Mn(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[me];
    (!n || !n.isManual_) && ce(9);
    const { scope_: r } = n;
    return _r(r, t), Ir(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = $e("Patches").applyPatches_;
    return it(e) ? r(e, t) : this.produce(
      e,
      (i) => r(i, t)
    );
  }
};
function Tn(e, t) {
  const n = $t(e) ? $e("MapSet").proxyMap_(e, t) : Zt(e) ? $e("MapSet").proxySet_(e, t) : uc(e, t);
  return (t ? t.scope_ : yo()).drafts_.push(n), n;
}
function hc(e) {
  return it(e) || ce(10, e), bo(e);
}
function bo(e) {
  if (!Ke(e) || Gt(e))
    return e;
  const t = e[me];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Pn(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Pn(e, !0);
  return Nt(n, (r, i) => {
    wo(n, r, bo(i));
  }), t && (t.finalized_ = !1), n;
}
var ge = new fc(), mc = ge.produce;
ge.produceWithPatches.bind(
  ge
);
ge.setAutoFreeze.bind(ge);
ge.setUseStrictShallowCopy.bind(ge);
ge.applyPatches.bind(ge);
ge.createDraft.bind(ge);
ge.finishDraft.bind(ge);
var v = {
  ancestors(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = t, r = v.levels(e, t);
    return n ? r = r.slice(1) : r = r.slice(0, -1), r;
  },
  common(e, t) {
    for (var n = [], r = 0; r < e.length && r < t.length; r++) {
      var i = e[r], o = t[r];
      if (i !== o)
        break;
      n.push(i);
    }
    return n;
  },
  compare(e, t) {
    for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
      if (e[r] < t[r]) return -1;
      if (e[r] > t[r]) return 1;
    }
    return 0;
  },
  endsAfter(e, t) {
    var n = e.length - 1, r = e.slice(0, n), i = t.slice(0, n), o = e[n], s = t[n];
    return v.equals(r, i) && o > s;
  },
  endsAt(e, t) {
    var n = e.length, r = e.slice(0, n), i = t.slice(0, n);
    return v.equals(r, i);
  },
  endsBefore(e, t) {
    var n = e.length - 1, r = e.slice(0, n), i = t.slice(0, n), o = e[n], s = t[n];
    return v.equals(r, i) && o < s;
  },
  equals(e, t) {
    return e.length === t.length && e.every((n, r) => n === t[r]);
  },
  hasPrevious(e) {
    return e[e.length - 1] > 0;
  },
  isAfter(e, t) {
    return v.compare(e, t) === 1;
  },
  isAncestor(e, t) {
    return e.length < t.length && v.compare(e, t) === 0;
  },
  isBefore(e, t) {
    return v.compare(e, t) === -1;
  },
  isChild(e, t) {
    return e.length === t.length + 1 && v.compare(e, t) === 0;
  },
  isCommon(e, t) {
    return e.length <= t.length && v.compare(e, t) === 0;
  },
  isDescendant(e, t) {
    return e.length > t.length && v.compare(e, t) === 0;
  },
  isParent(e, t) {
    return e.length + 1 === t.length && v.compare(e, t) === 0;
  },
  isPath(e) {
    return Array.isArray(e) && (e.length === 0 || typeof e[0] == "number");
  },
  isSibling(e, t) {
    if (e.length !== t.length)
      return !1;
    var n = e.slice(0, -1), r = t.slice(0, -1), i = e[e.length - 1], o = t[t.length - 1];
    return i !== o && v.equals(n, r);
  },
  levels(e) {
    for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = t, r = [], i = 0; i <= e.length; i++)
      r.push(e.slice(0, i));
    return n && r.reverse(), r;
  },
  next(e) {
    if (e.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
    var t = e[e.length - 1];
    return e.slice(0, -1).concat(t + 1);
  },
  operationCanTransformPath(e) {
    switch (e.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return !0;
      default:
        return !1;
    }
  },
  parent(e) {
    if (e.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(e, "]."));
    return e.slice(0, -1);
  },
  previous(e) {
    if (e.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
    var t = e[e.length - 1];
    if (t <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
    return e.slice(0, -1).concat(t - 1);
  },
  relative(e, t) {
    if (!v.isAncestor(t, e) && !v.equals(e, t))
      throw new Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
    return e.slice(t.length);
  },
  transform(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!e) return null;
    var r = [...e], {
      affinity: i = "forward"
    } = n;
    if (e.length === 0)
      return r;
    switch (t.type) {
      case "insert_node": {
        var {
          path: o
        } = t;
        (v.equals(o, r) || v.endsBefore(o, r) || v.isAncestor(o, r)) && (r[o.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: s
        } = t;
        if (v.equals(s, r) || v.isAncestor(s, r))
          return null;
        v.endsBefore(s, r) && (r[s.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: l,
          position: c
        } = t;
        v.equals(l, r) || v.endsBefore(l, r) ? r[l.length - 1] -= 1 : v.isAncestor(l, r) && (r[l.length - 1] -= 1, r[l.length] += c);
        break;
      }
      case "split_node": {
        var {
          path: u,
          position: d
        } = t;
        if (v.equals(u, r)) {
          if (i === "forward")
            r[r.length - 1] += 1;
          else if (i !== "backward") return null;
        } else v.endsBefore(u, r) ? r[u.length - 1] += 1 : v.isAncestor(u, r) && e[u.length] >= d && (r[u.length - 1] += 1, r[u.length] -= d);
        break;
      }
      case "move_node": {
        var {
          path: h,
          newPath: f
        } = t;
        if (v.equals(h, f))
          return r;
        if (v.isAncestor(h, r) || v.equals(h, r)) {
          var m = f.slice();
          return v.endsBefore(h, f) && h.length < f.length && (m[h.length - 1] -= 1), m.concat(r.slice(h.length));
        } else v.isSibling(h, f) && (v.isAncestor(f, r) || v.equals(f, r)) ? v.endsBefore(h, r) ? r[h.length - 1] -= 1 : r[h.length - 1] += 1 : v.endsBefore(f, r) || v.equals(f, r) || v.isAncestor(f, r) ? (v.endsBefore(h, r) && (r[h.length - 1] -= 1), r[f.length - 1] += 1) : v.endsBefore(h, r) && (v.equals(f, r) && (r[f.length - 1] += 1), r[h.length - 1] -= 1);
        break;
      }
    }
    return r;
  }
};
function gt(e) {
  "@babel/helpers - typeof";
  return gt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gt(e);
}
function gc(e, t) {
  if (gt(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (gt(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pc(e) {
  var t = gc(e, "string");
  return gt(t) === "symbol" ? t : String(t);
}
function lt(e, t, n) {
  return t = pc(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Nr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nr(Object(n), !0).forEach(function(r) {
      lt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var Ar = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    i[o - 2] = arguments[o];
  return [...t.slice(0, n), ...i, ...t.slice(n)];
}, pt = function(t, n, r) {
  for (var i = arguments.length, o = new Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++)
    o[s - 3] = arguments[s];
  return [...t.slice(0, n), ...o, ...t.slice(n + r)];
}, Br = pt, Jn = (e, t, n) => {
  if (t.length === 0)
    throw new Error("Cannot modify the editor");
  for (var r = L.get(e, t), i = t.slice(), o = n(r); i.length > 1; ) {
    var s = i.pop(), l = L.get(e, i);
    o = H(H({}, l), {}, {
      children: pt(l.children, s, 1, o)
    });
  }
  var c = i.pop();
  e.children = pt(e.children, c, 1, o);
}, Xe = (e, t, n) => {
  t.length === 0 ? e.children = n(e.children) : Jn(e, t, (r) => {
    if (K.isText(r))
      throw new Error("Cannot get the element at path [".concat(t, "] because it refers to a leaf node: ").concat(re.stringify(r)));
    return H(H({}, r), {}, {
      children: n(r.children)
    });
  });
}, zr = (e, t, n) => Jn(e, t, (r) => {
  if (!K.isText(r))
    throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(re.stringify(r)));
  return n(r);
}), vc = {
  transform(e, t) {
    var n = !1;
    switch (t.type) {
      case "insert_node": {
        var {
          path: r,
          node: i
        } = t;
        Xe(e, v.parent(r), (B) => {
          var z = r[r.length - 1];
          if (z > B.length)
            throw new Error('Cannot apply an "insert_node" operation at path ['.concat(r, "] because the destination is past the end of the node."));
          return Ar(B, z, i);
        }), n = !0;
        break;
      }
      case "insert_text": {
        var {
          path: o,
          offset: s,
          text: l
        } = t;
        if (l.length === 0) break;
        zr(e, o, (B) => {
          var z = B.text.slice(0, s), Z = B.text.slice(s);
          return H(H({}, B), {}, {
            text: z + l + Z
          });
        }), n = !0;
        break;
      }
      case "merge_node": {
        var {
          path: c
        } = t, u = c[c.length - 1], d = v.previous(c), h = d[d.length - 1];
        Xe(e, v.parent(c), (B) => {
          var z = B[u], Z = B[h], Oe;
          if (K.isText(z) && K.isText(Z))
            Oe = H(H({}, Z), {}, {
              text: Z.text + z.text
            });
          else if (!K.isText(z) && !K.isText(Z))
            Oe = H(H({}, Z), {}, {
              children: Z.children.concat(z.children)
            });
          else
            throw new Error('Cannot apply a "merge_node" operation at path ['.concat(c, "] to nodes of different interfaces: ").concat(re.stringify(z), " ").concat(re.stringify(Z)));
          return pt(B, h, 2, Oe);
        }), n = !0;
        break;
      }
      case "move_node": {
        var {
          path: f,
          newPath: m
        } = t, p = f[f.length - 1];
        if (v.isAncestor(f, m))
          throw new Error("Cannot move a path [".concat(f, "] to new path [").concat(m, "] because the destination is inside itself."));
        var w = L.get(e, f);
        Xe(e, v.parent(f), (B) => Br(B, p, 1));
        var C = v.transform(f, t), g = C[C.length - 1];
        Xe(e, v.parent(C), (B) => Ar(B, g, w)), n = !0;
        break;
      }
      case "remove_node": {
        var {
          path: b
        } = t, y = b[b.length - 1];
        if (Xe(e, v.parent(b), (B) => Br(B, y, 1)), e.selection) {
          var x = H({}, e.selection);
          for (var [E, M] of P.points(x)) {
            var Y = V.transform(E, t);
            if (x != null && Y != null)
              x[M] = Y;
            else {
              var D = void 0, G = void 0;
              for (var [se, X] of L.texts(e))
                if (v.compare(X, b) === -1)
                  D = [se, X];
                else {
                  G = [se, X];
                  break;
                }
              var $ = !1;
              D && G && (v.equals(G[1], b) ? $ = !v.hasPrevious(G[1]) : $ = v.common(D[1], b).length < v.common(G[1], b).length), D && !$ ? x[M] = {
                path: D[1],
                offset: D[0].text.length
              } : G ? x[M] = {
                path: G[1],
                offset: 0
              } : x = null;
            }
          }
          e.selection = x;
        }
        break;
      }
      case "remove_text": {
        var {
          path: N,
          offset: ue,
          text: ve
        } = t;
        if (ve.length === 0) break;
        zr(e, N, (B) => {
          var z = B.text.slice(0, ue), Z = B.text.slice(ue + ve.length);
          return H(H({}, B), {}, {
            text: z + Z
          });
        }), n = !0;
        break;
      }
      case "set_node": {
        var {
          path: Be,
          properties: Ge,
          newProperties: ct
        } = t;
        if (Be.length === 0)
          throw new Error("Cannot set properties on the root node!");
        Jn(e, Be, (B) => {
          var z = H({}, B);
          for (var Z in ct) {
            if (Z === "children" || Z === "text")
              throw new Error('Cannot set the "'.concat(Z, '" property of nodes!'));
            var Oe = ct[Z];
            Oe == null ? delete z[Z] : z[Z] = Oe;
          }
          for (var Pt in Ge)
            ct.hasOwnProperty(Pt) || delete z[Pt];
          return z;
        });
        break;
      }
      case "set_selection": {
        var {
          newProperties: Re
        } = t;
        if (Re == null) {
          e.selection = null;
          break;
        }
        if (e.selection == null) {
          if (!P.isRange(Re))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(re.stringify(Re), " when there is no current selection."));
          e.selection = H({}, Re);
          break;
        }
        var Ve = H({}, e.selection);
        for (var Ne in Re) {
          var Ot = Re[Ne];
          if (Ot == null) {
            if (Ne === "anchor" || Ne === "focus")
              throw new Error('Cannot remove the "'.concat(Ne, '" selection property'));
            delete Ve[Ne];
          } else
            Ve[Ne] = Ot;
        }
        e.selection = Ve;
        break;
      }
      case "split_node": {
        var {
          path: A,
          position: St,
          properties: er
        } = t, tr = A[A.length - 1];
        if (A.length === 0)
          throw new Error('Cannot apply a "split_node" operation at path ['.concat(A, "] because the root node cannot be split."));
        Xe(e, v.parent(A), (B) => {
          var z = B[tr], Z, Oe;
          if (K.isText(z)) {
            var Pt = z.text.slice(0, St), Zo = z.text.slice(St);
            Z = H(H({}, z), {}, {
              text: Pt
            }), Oe = H(H({}, er), {}, {
              text: Zo
            });
          } else {
            var Go = z.children.slice(0, St), Vo = z.children.slice(St);
            Z = H(H({}, z), {}, {
              children: Go
            }), Oe = H(H({}, er), {}, {
              children: Vo
            });
          }
          return pt(B, tr, 1, Z, Oe);
        }), n = !0;
        break;
      }
    }
    if (n && e.selection) {
      var Vt = H({}, e.selection);
      for (var [Ko, $o] of P.points(Vt))
        Vt[$o] = V.transform(Ko, t);
      e.selection = Vt;
    }
  }
}, wc = {
  insertNodes(e, t, n) {
    e.insertNodes(t, n);
  },
  liftNodes(e, t) {
    e.liftNodes(t);
  },
  mergeNodes(e, t) {
    e.mergeNodes(t);
  },
  moveNodes(e, t) {
    e.moveNodes(t);
  },
  removeNodes(e, t) {
    e.removeNodes(t);
  },
  setNodes(e, t, n) {
    e.setNodes(t, n);
  },
  splitNodes(e, t) {
    e.splitNodes(t);
  },
  unsetNodes(e, t, n) {
    e.unsetNodes(t, n);
  },
  unwrapNodes(e, t) {
    e.unwrapNodes(t);
  },
  wrapNodes(e, t, n) {
    e.wrapNodes(t, n);
  }
}, yc = {
  collapse(e, t) {
    e.collapse(t);
  },
  deselect(e) {
    e.deselect();
  },
  move(e, t) {
    e.move(t);
  },
  select(e, t) {
    e.select(t);
  },
  setPoint(e, t, n) {
    e.setPoint(t, n);
  },
  setSelection(e, t) {
    e.setSelection(t);
  }
}, te = (e) => typeof e == "object" && e !== null, ko = (e, t) => {
  for (var n in e) {
    var r = e[n], i = t[n];
    if (Array.isArray(r) && Array.isArray(i)) {
      if (r.length !== i.length) return !1;
      for (var o = 0; o < r.length; o++)
        if (r[o] !== i[o]) return !1;
    } else if (te(r) && te(i)) {
      if (!ko(r, i)) return !1;
    } else if (r !== i)
      return !1;
  }
  for (var s in t)
    if (e[s] === void 0 && t[s] !== void 0)
      return !1;
  return !0;
};
function Cc(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function vt(e, t) {
  if (e == null) return {};
  var n = Cc(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
var bc = ["anchor", "focus"];
function jr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function kc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jr(Object(n), !0).forEach(function(r) {
      lt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var P = {
  edges(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = t, {
      anchor: r,
      focus: i
    } = e;
    return P.isBackward(e) === n ? [r, i] : [i, r];
  },
  end(e) {
    var [, t] = P.edges(e);
    return t;
  },
  equals(e, t) {
    return V.equals(e.anchor, t.anchor) && V.equals(e.focus, t.focus);
  },
  surrounds(e, t) {
    var n = P.intersection(e, t);
    return n ? P.equals(n, t) : !1;
  },
  includes(e, t) {
    if (P.isRange(t)) {
      if (P.includes(e, t.anchor) || P.includes(e, t.focus))
        return !0;
      var [n, r] = P.edges(e), [i, o] = P.edges(t);
      return V.isBefore(n, i) && V.isAfter(r, o);
    }
    var [s, l] = P.edges(e), c = !1, u = !1;
    return V.isPoint(t) ? (c = V.compare(t, s) >= 0, u = V.compare(t, l) <= 0) : (c = v.compare(t, s.path) >= 0, u = v.compare(t, l.path) <= 0), c && u;
  },
  intersection(e, t) {
    var n = vt(e, bc), [r, i] = P.edges(e), [o, s] = P.edges(t), l = V.isBefore(r, o) ? o : r, c = V.isBefore(i, s) ? i : s;
    return V.isBefore(c, l) ? null : kc({
      anchor: l,
      focus: c
    }, n);
  },
  isBackward(e) {
    var {
      anchor: t,
      focus: n
    } = e;
    return V.isAfter(t, n);
  },
  isCollapsed(e) {
    var {
      anchor: t,
      focus: n
    } = e;
    return V.equals(t, n);
  },
  isExpanded(e) {
    return !P.isCollapsed(e);
  },
  isForward(e) {
    return !P.isBackward(e);
  },
  isRange(e) {
    return te(e) && V.isPoint(e.anchor) && V.isPoint(e.focus);
  },
  *points(e) {
    yield [e.anchor, "anchor"], yield [e.focus, "focus"];
  },
  start(e) {
    var [t] = P.edges(e);
    return t;
  },
  transform(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e === null)
      return null;
    var {
      affinity: r = "inward"
    } = n, i, o;
    if (r === "inward") {
      var s = P.isCollapsed(e);
      P.isForward(e) ? (i = "forward", o = s ? i : "backward") : (i = "backward", o = s ? i : "forward");
    } else r === "outward" ? P.isForward(e) ? (i = "backward", o = "forward") : (i = "forward", o = "backward") : (i = r, o = r);
    var l = V.transform(e.anchor, t, {
      affinity: i
    }), c = V.transform(e.focus, t, {
      affinity: o
    });
    return !l || !c ? null : {
      anchor: l,
      focus: c
    };
  }
}, Hr = function(t) {
  var {
    deep: n = !1
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!te(t)) return !1;
  var r = typeof t.apply == "function";
  if (r) return !1;
  var i = n ? L.isNodeList(t.children) : Array.isArray(t.children);
  return i;
}, Te = {
  isAncestor(e) {
    var {
      deep: t = !1
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return te(e) && L.isNodeList(e.children, {
      deep: t
    });
  },
  isElement: Hr,
  isElementList(e) {
    var {
      deep: t = !1
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Array.isArray(e) && e.every((n) => Te.isElement(n, {
      deep: t
    }));
  },
  isElementProps(e) {
    return e.children !== void 0;
  },
  isElementType: function(t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Hr(t) && t[r] === n;
  },
  matches(e, t) {
    for (var n in t)
      if (n !== "children" && e[n] !== t[n])
        return !1;
    return !0;
  }
}, xc = ["children"], Ec = ["text"], L = {
  ancestor(e, t) {
    var n = L.get(e, t);
    if (K.isText(n))
      throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(re.stringify(n)));
    return n;
  },
  ancestors(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var r of v.ancestors(t, n)) {
        var i = L.ancestor(e, r), o = [i, r];
        yield o;
      }
    }();
  },
  child(e, t) {
    if (K.isText(e))
      throw new Error("Cannot get the child of a text node: ".concat(re.stringify(e)));
    var n = e.children[t];
    if (n == null)
      throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(re.stringify(e)));
    return n;
  },
  children(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: r = !1
      } = n, i = L.ancestor(e, t), {
        children: o
      } = i, s = r ? o.length - 1 : 0; r ? s >= 0 : s < o.length; ) {
        var l = L.child(i, s), c = t.concat(s);
        yield [l, c], s = r ? s - 1 : s + 1;
      }
    }();
  },
  common(e, t, n) {
    var r = v.common(t, n), i = L.get(e, r);
    return [i, r];
  },
  descendant(e, t) {
    var n = L.get(e, t);
    if (I.isEditor(n))
      throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(re.stringify(n)));
    return n;
  },
  descendants(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of L.nodes(e, t))
        r.length !== 0 && (yield [n, r]);
    }();
  },
  elements(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of L.nodes(e, t))
        Te.isElement(n) && (yield [n, r]);
    }();
  },
  extractProps(e) {
    if (Te.isAncestor(e)) {
      var t = vt(e, xc);
      return t;
    } else {
      var t = vt(e, Ec);
      return t;
    }
  },
  first(e, t) {
    for (var n = t.slice(), r = L.get(e, n); r && !(K.isText(r) || r.children.length === 0); )
      r = r.children[0], n.push(0);
    return [r, n];
  },
  fragment(e, t) {
    if (K.isText(e))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(re.stringify(e)));
    var n = mc({
      children: e.children
    }, (r) => {
      var [i, o] = P.edges(t), s = L.nodes(r, {
        reverse: !0,
        pass: (f) => {
          var [, m] = f;
          return !P.includes(t, m);
        }
      });
      for (var [, l] of s) {
        if (!P.includes(t, l)) {
          var c = L.parent(r, l), u = l[l.length - 1];
          c.children.splice(u, 1);
        }
        if (v.equals(l, o.path)) {
          var d = L.leaf(r, l);
          d.text = d.text.slice(0, o.offset);
        }
        if (v.equals(l, i.path)) {
          var h = L.leaf(r, l);
          h.text = h.text.slice(i.offset);
        }
      }
      I.isEditor(r) && (r.selection = null);
    });
    return n.children;
  },
  get(e, t) {
    var n = L.getIf(e, t);
    if (n === void 0)
      throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(re.stringify(e)));
    return n;
  },
  getIf(e, t) {
    for (var n = e, r = 0; r < t.length; r++) {
      var i = t[r];
      if (K.isText(n) || !n.children[i])
        return;
      n = n.children[i];
    }
    return n;
  },
  has(e, t) {
    for (var n = e, r = 0; r < t.length; r++) {
      var i = t[r];
      if (K.isText(n) || !n.children[i])
        return !1;
      n = n.children[i];
    }
    return !0;
  },
  isNode(e) {
    var {
      deep: t = !1
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return K.isText(e) || Te.isElement(e, {
      deep: t
    }) || I.isEditor(e, {
      deep: t
    });
  },
  isNodeList(e) {
    var {
      deep: t = !1
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Array.isArray(e) && e.every((n) => L.isNode(n, {
      deep: t
    }));
  },
  last(e, t) {
    for (var n = t.slice(), r = L.get(e, n); r && !(K.isText(r) || r.children.length === 0); ) {
      var i = r.children.length - 1;
      r = r.children[i], n.push(i);
    }
    return [r, n];
  },
  leaf(e, t) {
    var n = L.get(e, t);
    if (!K.isText(n))
      throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(re.stringify(n)));
    return n;
  },
  levels(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var r of v.levels(t, n)) {
        var i = L.get(e, r);
        yield [i, r];
      }
    }();
  },
  matches(e, t) {
    return Te.isElement(e) && Te.isElementProps(t) && Te.matches(e, t) || K.isText(e) && K.isTextProps(t) && K.matches(e, t);
  },
  nodes(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: n,
        reverse: r = !1
      } = t, {
        from: i = [],
        to: o
      } = t, s = /* @__PURE__ */ new Set(), l = [], c = e; !(o && (r ? v.isBefore(l, o) : v.isAfter(l, o))); ) {
        if (s.has(c) || (yield [c, l]), !s.has(c) && !K.isText(c) && c.children.length !== 0 && (n == null || n([c, l]) === !1)) {
          s.add(c);
          var u = r ? c.children.length - 1 : 0;
          v.isAncestor(l, i) && (u = i[l.length]), l = l.concat(u), c = L.get(e, l);
          continue;
        }
        if (l.length === 0)
          break;
        if (!r) {
          var d = v.next(l);
          if (L.has(e, d)) {
            l = d, c = L.get(e, l);
            continue;
          }
        }
        if (r && l[l.length - 1] !== 0) {
          var h = v.previous(l);
          l = h, c = L.get(e, l);
          continue;
        }
        l = v.parent(l), c = L.get(e, l), s.add(c);
      }
    }();
  },
  parent(e, t) {
    var n = v.parent(t), r = L.get(e, n);
    if (K.isText(r))
      throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
    return r;
  },
  string(e) {
    return K.isText(e) ? e.text : e.children.map(L.string).join("");
  },
  texts(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of L.nodes(e, t))
        K.isText(n) && (yield [n, r]);
    }();
  }
};
function Ur(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(n), !0).forEach(function(r) {
      lt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ur(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var ut = {
  isNodeOperation(e) {
    return ut.isOperation(e) && e.type.endsWith("_node");
  },
  isOperation(e) {
    if (!te(e))
      return !1;
    switch (e.type) {
      case "insert_node":
        return v.isPath(e.path) && L.isNode(e.node);
      case "insert_text":
        return typeof e.offset == "number" && typeof e.text == "string" && v.isPath(e.path);
      case "merge_node":
        return typeof e.position == "number" && v.isPath(e.path) && te(e.properties);
      case "move_node":
        return v.isPath(e.path) && v.isPath(e.newPath);
      case "remove_node":
        return v.isPath(e.path) && L.isNode(e.node);
      case "remove_text":
        return typeof e.offset == "number" && typeof e.text == "string" && v.isPath(e.path);
      case "set_node":
        return v.isPath(e.path) && te(e.properties) && te(e.newProperties);
      case "set_selection":
        return e.properties === null && P.isRange(e.newProperties) || e.newProperties === null && P.isRange(e.properties) || te(e.properties) && te(e.newProperties);
      case "split_node":
        return v.isPath(e.path) && typeof e.position == "number" && te(e.properties);
      default:
        return !1;
    }
  },
  isOperationList(e) {
    return Array.isArray(e) && e.every((t) => ut.isOperation(t));
  },
  isSelectionOperation(e) {
    return ut.isOperation(e) && e.type.endsWith("_selection");
  },
  isTextOperation(e) {
    return ut.isOperation(e) && e.type.endsWith("_text");
  },
  inverse(e) {
    switch (e.type) {
      case "insert_node":
        return W(W({}, e), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return W(W({}, e), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return W(W({}, e), {}, {
          type: "split_node",
          path: v.previous(e.path)
        });
      case "move_node": {
        var {
          newPath: t,
          path: n
        } = e;
        if (v.equals(t, n))
          return e;
        if (v.isSibling(n, t))
          return W(W({}, e), {}, {
            path: t,
            newPath: n
          });
        var r = v.transform(n, e), i = v.transform(v.next(n), e);
        return W(W({}, e), {}, {
          path: r,
          newPath: i
        });
      }
      case "remove_node":
        return W(W({}, e), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return W(W({}, e), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: o,
          newProperties: s
        } = e;
        return W(W({}, e), {}, {
          properties: s,
          newProperties: o
        });
      }
      case "set_selection": {
        var {
          properties: l,
          newProperties: c
        } = e;
        return l == null ? W(W({}, e), {}, {
          properties: c,
          newProperties: null
        }) : c == null ? W(W({}, e), {}, {
          properties: null,
          newProperties: l
        }) : W(W({}, e), {}, {
          properties: c,
          newProperties: l
        });
      }
      case "split_node":
        return W(W({}, e), {}, {
          type: "merge_node",
          path: v.next(e.path)
        });
    }
  }
}, Oc = function(t) {
  var {
    deep: n = !1
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!te(t))
    return !1;
  var r = typeof t.addMark == "function" && typeof t.apply == "function" && typeof t.deleteFragment == "function" && typeof t.insertBreak == "function" && typeof t.insertSoftBreak == "function" && typeof t.insertFragment == "function" && typeof t.insertNode == "function" && typeof t.insertText == "function" && typeof t.isElementReadOnly == "function" && typeof t.isInline == "function" && typeof t.isSelectable == "function" && typeof t.isVoid == "function" && typeof t.normalizeNode == "function" && typeof t.onChange == "function" && typeof t.removeMark == "function" && typeof t.getDirtyPaths == "function" && (t.marks === null || te(t.marks)) && (t.selection === null || P.isRange(t.selection)) && (!n || L.isNodeList(t.children)) && ut.isOperationList(t.operations);
  return r;
}, I = {
  above(e, t) {
    return e.above(t);
  },
  addMark(e, t, n) {
    e.addMark(t, n);
  },
  after(e, t, n) {
    return e.after(t, n);
  },
  before(e, t, n) {
    return e.before(t, n);
  },
  deleteBackward(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: n = "character"
    } = t;
    e.deleteBackward(n);
  },
  deleteForward(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: n = "character"
    } = t;
    e.deleteForward(n);
  },
  deleteFragment(e, t) {
    e.deleteFragment(t);
  },
  edges(e, t) {
    return e.edges(t);
  },
  elementReadOnly(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.elementReadOnly(t);
  },
  end(e, t) {
    return e.end(t);
  },
  first(e, t) {
    return e.first(t);
  },
  fragment(e, t) {
    return e.fragment(t);
  },
  hasBlocks(e, t) {
    return e.hasBlocks(t);
  },
  hasInlines(e, t) {
    return e.hasInlines(t);
  },
  hasPath(e, t) {
    return e.hasPath(t);
  },
  hasTexts(e, t) {
    return e.hasTexts(t);
  },
  insertBreak(e) {
    e.insertBreak();
  },
  insertFragment(e, t, n) {
    e.insertFragment(t, n);
  },
  insertNode(e, t) {
    e.insertNode(t);
  },
  insertSoftBreak(e) {
    e.insertSoftBreak();
  },
  insertText(e, t) {
    e.insertText(t);
  },
  isBlock(e, t) {
    return e.isBlock(t);
  },
  isEdge(e, t, n) {
    return e.isEdge(t, n);
  },
  isEditor(e) {
    return Oc(e);
  },
  isElementReadOnly(e, t) {
    return e.isElementReadOnly(t);
  },
  isEmpty(e, t) {
    return e.isEmpty(t);
  },
  isEnd(e, t, n) {
    return e.isEnd(t, n);
  },
  isInline(e, t) {
    return e.isInline(t);
  },
  isNormalizing(e) {
    return e.isNormalizing();
  },
  isSelectable(e, t) {
    return e.isSelectable(t);
  },
  isStart(e, t, n) {
    return e.isStart(t, n);
  },
  isVoid(e, t) {
    return e.isVoid(t);
  },
  last(e, t) {
    return e.last(t);
  },
  leaf(e, t, n) {
    return e.leaf(t, n);
  },
  levels(e, t) {
    return e.levels(t);
  },
  marks(e) {
    return e.getMarks();
  },
  next(e, t) {
    return e.next(t);
  },
  node(e, t, n) {
    return e.node(t, n);
  },
  nodes(e, t) {
    return e.nodes(t);
  },
  normalize(e, t) {
    e.normalize(t);
  },
  parent(e, t, n) {
    return e.parent(t, n);
  },
  path(e, t, n) {
    return e.path(t, n);
  },
  pathRef(e, t, n) {
    return e.pathRef(t, n);
  },
  pathRefs(e) {
    return e.pathRefs();
  },
  point(e, t, n) {
    return e.point(t, n);
  },
  pointRef(e, t, n) {
    return e.pointRef(t, n);
  },
  pointRefs(e) {
    return e.pointRefs();
  },
  positions(e, t) {
    return e.positions(t);
  },
  previous(e, t) {
    return e.previous(t);
  },
  range(e, t, n) {
    return e.range(t, n);
  },
  rangeRef(e, t, n) {
    return e.rangeRef(t, n);
  },
  rangeRefs(e) {
    return e.rangeRefs();
  },
  removeMark(e, t) {
    e.removeMark(t);
  },
  setNormalizing(e, t) {
    e.setNormalizing(t);
  },
  start(e, t) {
    return e.start(t);
  },
  string(e, t, n) {
    return e.string(t, n);
  },
  unhangRange(e, t, n) {
    return e.unhangRange(t, n);
  },
  void(e, t) {
    return e.void(t);
  },
  withoutNormalizing(e, t) {
    e.withoutNormalizing(t);
  },
  shouldMergeNodesRemovePrevNode: (e, t, n) => e.shouldMergeNodesRemovePrevNode(t, n)
};
function Wr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wr(Object(n), !0).forEach(function(r) {
      lt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var V = {
  compare(e, t) {
    var n = v.compare(e.path, t.path);
    return n === 0 ? e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0 : n;
  },
  isAfter(e, t) {
    return V.compare(e, t) === 1;
  },
  isBefore(e, t) {
    return V.compare(e, t) === -1;
  },
  equals(e, t) {
    return e.offset === t.offset && v.equals(e.path, t.path);
  },
  isPoint(e) {
    return te(e) && typeof e.offset == "number" && v.isPath(e.path);
  },
  transform(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e === null)
      return null;
    var {
      affinity: r = "forward"
    } = n, {
      path: i,
      offset: o
    } = e;
    switch (t.type) {
      case "insert_node":
      case "move_node": {
        i = v.transform(i, t, n);
        break;
      }
      case "insert_text": {
        v.equals(t.path, i) && (t.offset < o || t.offset === o && r === "forward") && (o += t.text.length);
        break;
      }
      case "merge_node": {
        v.equals(t.path, i) && (o += t.position), i = v.transform(i, t, n);
        break;
      }
      case "remove_text": {
        v.equals(t.path, i) && t.offset <= o && (o -= Math.min(o - t.offset, t.text.length));
        break;
      }
      case "remove_node": {
        if (v.equals(t.path, i) || v.isAncestor(t.path, i))
          return null;
        i = v.transform(i, t, n);
        break;
      }
      case "split_node": {
        if (v.equals(t.path, i)) {
          if (t.position === o && r == null)
            return null;
          (t.position < o || t.position === o && r === "forward") && (o -= t.position, i = v.transform(i, t, qr(qr({}, n), {}, {
            affinity: "forward"
          })));
        } else
          i = v.transform(i, t, n);
        break;
      }
      default:
        return e;
    }
    return {
      path: i,
      offset: o
    };
  }
}, Kr = void 0, re = {
  setScrubber(e) {
    Kr = e;
  },
  stringify(e) {
    return JSON.stringify(e, Kr);
  }
}, Sc = ["text"], Pc = ["anchor", "focus", "merge"];
function $r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $r(Object(n), !0).forEach(function(r) {
      lt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var K = {
  equals(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: r = !1
    } = n;
    function i(o) {
      var s = vt(o, Sc);
      return s;
    }
    return ko(r ? i(e) : e, r ? i(t) : t);
  },
  isText(e) {
    return te(e) && typeof e.text == "string";
  },
  isTextList(e) {
    return Array.isArray(e) && e.every((t) => K.isText(t));
  },
  isTextProps(e) {
    return e.text !== void 0;
  },
  matches(e, t) {
    for (var n in t)
      if (n !== "text" && (!e.hasOwnProperty(n) || e[n] !== t[n]))
        return !1;
    return !0;
  },
  decorations(e, t) {
    var n = [{
      leaf: De({}, e)
    }];
    for (var r of t) {
      var {
        anchor: i,
        focus: o,
        merge: s
      } = r, l = vt(r, Pc), [c, u] = P.edges(r), d = [], h = 0, f = c.offset, m = u.offset, p = s ?? Object.assign;
      for (var {
        leaf: w
      } of n) {
        var {
          length: C
        } = w.text, g = h;
        if (h += C, f <= g && h <= m) {
          p(w, l), d.push({
            leaf: w
          });
          continue;
        }
        if (f !== m && (f === h || m === g) || f > h || m < g || m === g && g !== 0) {
          d.push({
            leaf: w
          });
          continue;
        }
        var b = w, y = void 0, x = void 0;
        if (m < h) {
          var E = m - g;
          x = {
            leaf: De(De({}, b), {}, {
              text: b.text.slice(E)
            })
          }, b = De(De({}, b), {}, {
            text: b.text.slice(0, E)
          });
        }
        if (f > g) {
          var M = f - g;
          y = {
            leaf: De(De({}, b), {}, {
              text: b.text.slice(0, M)
            })
          }, b = De(De({}, b), {}, {
            text: b.text.slice(M)
          });
        }
        p(b, l), y && d.push(y), d.push({
          leaf: b
        }), x && d.push(x);
      }
      n = d;
    }
    if (n.length > 1) {
      var Y = 0;
      for (var [D, G] of n.entries()) {
        var se = Y, X = se + G.leaf.text.length, $ = {
          start: se,
          end: X
        };
        D === 0 && ($.isFirst = !0), D === n.length - 1 && ($.isLast = !0), G.position = $, Y = X;
      }
    }
    return n;
  }
}, Lc = (e) => e.selection ? e.selection : e.children.length > 0 ? I.end(e, []) : [0], j;
(function(e) {
  e[e.None = 0] = "None", e[e.Extend = 1] = "Extend", e[e.ZWJ = 2] = "ZWJ", e[e.RI = 4] = "RI", e[e.Prepend = 8] = "Prepend", e[e.SpacingMark = 16] = "SpacingMark", e[e.L = 32] = "L", e[e.V = 64] = "V", e[e.T = 128] = "T", e[e.LV = 256] = "LV", e[e.LVT = 512] = "LVT", e[e.ExtPict = 1024] = "ExtPict", e[e.Any = 2048] = "Any";
})(j || (j = {}));
j.L, j.L | j.V | j.LV | j.LVT, j.LV | j.V, j.V | j.T, j.LVT | j.T, j.T, j.Any, j.Extend | j.ZWJ, j.Any, j.SpacingMark, j.Prepend, j.Any, j.ZWJ, j.ExtPict, j.RI, j.RI;
var Mc = {
  delete(e, t) {
    e.delete(t);
  },
  insertFragment(e, t, n) {
    e.insertFragment(t, n);
  },
  insertText(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    I.withoutNormalizing(e, () => {
      var {
        voids: r = !1
      } = n, {
        at: i = Lc(e)
      } = n;
      if (v.isPath(i) && (i = I.range(e, i)), P.isRange(i))
        if (P.isCollapsed(i))
          i = i.anchor;
        else {
          var o = P.end(i);
          if (!r && I.void(e, {
            at: o
          }))
            return;
          var s = P.start(i), l = I.pointRef(e, s), c = I.pointRef(e, o);
          qe.delete(e, {
            at: i,
            voids: r
          });
          var u = l.unref(), d = c.unref();
          i = u || d, qe.setSelection(e, {
            anchor: i,
            focus: i
          });
        }
      if (!(!r && I.void(e, {
        at: i
      }) || I.elementReadOnly(e, {
        at: i
      }))) {
        var {
          path: h,
          offset: f
        } = i;
        t.length > 0 && e.apply({
          type: "insert_text",
          path: h,
          offset: f,
          text: t
        });
      }
    });
  }
};
function Zr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zr(Object(n), !0).forEach(function(r) {
      lt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var qe = Mt(Mt(Mt(Mt({}, vc), wc), yc), Mc), be = {}, Gr;
function Dc() {
  if (Gr) return be;
  Gr = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  });
  for (var e = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), t = {
    alt: "altKey",
    control: "ctrlKey",
    meta: "metaKey",
    shift: "shiftKey"
  }, n = {
    add: "+",
    break: "pause",
    cmd: "meta",
    command: "meta",
    ctl: "control",
    ctrl: "control",
    del: "delete",
    down: "arrowdown",
    esc: "escape",
    ins: "insert",
    left: "arrowleft",
    mod: e ? "meta" : "control",
    opt: "alt",
    option: "alt",
    return: "enter",
    right: "arrowright",
    space: " ",
    spacebar: " ",
    up: "arrowup",
    win: "meta",
    windows: "meta"
  }, r = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    control: 17,
    alt: 18,
    pause: 19,
    capslock: 20,
    escape: 27,
    " ": 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    arrowleft: 37,
    arrowup: 38,
    arrowright: 39,
    arrowdown: 40,
    insert: 45,
    delete: 46,
    meta: 91,
    numlock: 144,
    scrolllock: 145,
    ";": 186,
    "=": 187,
    ",": 188,
    "-": 189,
    ".": 190,
    "/": 191,
    "`": 192,
    "[": 219,
    "\\": 220,
    "]": 221,
    "'": 222
  }, i = 1; i < 20; i++)
    r["f" + i] = 111 + i;
  function o(f, m, p) {
    m && !("byKey" in m) && (p = m, m = null), Array.isArray(f) || (f = [f]);
    var w = f.map(function(b) {
      return c(b, m);
    }), C = function(y) {
      return w.some(function(x) {
        return u(x, y);
      });
    }, g = p == null ? C : C(p);
    return g;
  }
  function s(f, m) {
    return o(f, m);
  }
  function l(f, m) {
    return o(f, { byKey: !0 }, m);
  }
  function c(f, m) {
    var p = m && m.byKey, w = {};
    f = f.replace("++", "+add");
    var C = f.split("+"), g = C.length;
    for (var b in t)
      w[t[b]] = !1;
    var y = !0, x = !1, E = void 0;
    try {
      for (var M = C[Symbol.iterator](), Y; !(y = (Y = M.next()).done); y = !0) {
        var D = Y.value, G = D.endsWith("?") && D.length > 1;
        G && (D = D.slice(0, -1));
        var se = h(D), X = t[se];
        if (D.length > 1 && !X && !n[D] && !r[se])
          throw new TypeError('Unknown modifier: "' + D + '"');
        (g === 1 || !X) && (p ? w.key = se : w.which = d(D)), X && (w[X] = G ? null : !0);
      }
    } catch ($) {
      x = !0, E = $;
    } finally {
      try {
        !y && M.return && M.return();
      } finally {
        if (x)
          throw E;
      }
    }
    return w;
  }
  function u(f, m) {
    for (var p in f) {
      var w = f[p], C = void 0;
      if (w != null && (p === "key" && m.key != null ? C = m.key.toLowerCase() : p === "which" ? C = w === 91 && m.which === 93 ? 91 : m.which : C = m[p], !(C == null && w === !1) && C !== w))
        return !1;
    }
    return !0;
  }
  function d(f) {
    f = h(f);
    var m = r[f] || f.toUpperCase().charCodeAt(0);
    return m;
  }
  function h(f) {
    return f = f.toLowerCase(), f = n[f] || f, f;
  }
  return be.default = o, be.isHotkey = o, be.isCodeHotkey = s, be.isKeyHotkey = l, be.parseHotkey = c, be.compareHotkey = u, be.toKeyCode = d, be.toKeyName = h, be;
}
var _e = Dc(), xo = globalThis.Node, Tc = globalThis.Text, Eo = (e) => e && e.ownerDocument && e.ownerDocument.defaultView || null, _c = (e) => zt(e) && e.nodeType === 8, Se = (e) => zt(e) && e.nodeType === 1, zt = (e) => {
  var t = Eo(e);
  return !!t && e instanceof t.Node;
}, Vr = (e) => {
  var t = e && e.anchorNode && Eo(e.anchorNode);
  return !!t && e instanceof t.Selection;
}, Fc = (e) => {
  var [t, n] = e;
  if (Se(t) && t.childNodes.length) {
    var r = n === t.childNodes.length, i = r ? n - 1 : n;
    for ([t, i] = Oo(t, i, r ? "backward" : "forward"), r = i < n; Se(t) && t.childNodes.length; ) {
      var o = r ? t.childNodes.length - 1 : 0;
      t = Rc(t, o, r ? "backward" : "forward");
    }
    n = r && t.textContent != null ? t.textContent.length : 0;
  }
  return [t, n];
}, Ic = (e) => {
  for (var t = e && e.parentNode; t; ) {
    if (t.toString() === "[object ShadowRoot]")
      return !0;
    t = t.parentNode;
  }
  return !1;
}, Oo = (e, t, n) => {
  for (var {
    childNodes: r
  } = e, i = r[t], o = t, s = !1, l = !1; (_c(i) || Se(i) && i.childNodes.length === 0 || Se(i) && i.getAttribute("contenteditable") === "false") && !(s && l); ) {
    if (o >= r.length) {
      s = !0, o = t - 1, n = "backward";
      continue;
    }
    if (o < 0) {
      l = !0, o = t + 1, n = "forward";
      continue;
    }
    i = r[o], t = o, o += n === "forward" ? 1 : -1;
  }
  return [i, t];
}, Rc = (e, t, n) => {
  var [r] = Oo(e, t, n);
  return r;
}, Yr = (e) => e.getSelection != null ? e.getSelection() : document.getSelection(), So = (e, t, n) => {
  var {
    target: r
  } = t;
  if (Se(r) && r.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: i
  } = S.getWindow(e);
  if (i.contains(r))
    return S.hasDOMNode(e, r, {
      editable: !0
    });
  var o = n.find((s) => {
    var {
      addedNodes: l,
      removedNodes: c
    } = s;
    for (var u of l)
      if (u === r || u.contains(r))
        return !0;
    for (var d of c)
      if (d === r || d.contains(r))
        return !0;
  });
  return !o || o === t ? !1 : So(e, o, n);
}, Xr = (e, t) => !!(e.compareDocumentPosition(t) & xo.DOCUMENT_POSITION_PRECEDING), Nc = (e, t) => !!(e.compareDocumentPosition(t) & xo.DOCUMENT_POSITION_FOLLOWING), pn, vn, Jr = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), wn = typeof navigator < "u" && /Android/.test(navigator.userAgent), Dt = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Ac = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent);
typeof navigator < "u" && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && ((pn = navigator.userAgent.match(/Version\/(\d+)/)) !== null && pn !== void 0 && pn[1] && parseInt((vn = navigator.userAgent.match(/Version\/(\d+)/)) === null || vn === void 0 ? void 0 : vn[1], 10) < 17);
function wt(e) {
  "@babel/helpers - typeof";
  return wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wt(e);
}
function Bc(e, t) {
  if (wt(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (wt(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zc(e) {
  var t = Bc(e, "string");
  return wt(t) === "symbol" ? t : String(t);
}
function jc(e, t, n) {
  return t = zc(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Hc = 0;
class Uc {
  constructor() {
    jc(this, "id", void 0), this.id = "".concat(Hc++);
  }
}
var Wc = /* @__PURE__ */ new WeakMap(), qc = /* @__PURE__ */ new WeakMap(), Kc = /* @__PURE__ */ new WeakMap(), $c = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), Gc = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), Vc = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap(), S = {
  androidPendingDiffs: (e) => Xc.get(e),
  androidScheduleFlush: (e) => {
    var t;
    (t = Yc.get(e)) === null || t === void 0 || t();
  },
  blur: (e) => {
    var t = S.toDOMNode(e, e), n = S.findDocumentOrShadowRoot(e);
    Tt.set(e, !1), n.activeElement === t && t.blur();
  },
  deselect: (e) => {
    var {
      selection: t
    } = e, n = S.findDocumentOrShadowRoot(e), r = Yr(n);
    r && r.rangeCount > 0 && r.removeAllRanges(), t && qe.deselect(e);
  },
  findDocumentOrShadowRoot: (e) => {
    var t = S.toDOMNode(e, e), n = t.getRootNode();
    return n instanceof Document || n instanceof ShadowRoot ? n : t.ownerDocument;
  },
  findEventRange: (e, t) => {
    "nativeEvent" in t && (t = t.nativeEvent);
    var {
      clientX: n,
      clientY: r,
      target: i
    } = t;
    if (n == null || r == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var o = S.toSlateNode(e, t.target), s = S.findPath(e, o);
    if (Te.isElement(o) && I.isVoid(e, o)) {
      var l = i.getBoundingClientRect(), c = e.isInline(o) ? n - l.left < l.left + l.width - n : r - l.top < l.top + l.height - r, u = I.point(e, s, {
        edge: c ? "start" : "end"
      }), d = c ? I.before(e, u) : I.after(e, u);
      if (d) {
        var h = I.range(e, d);
        return h;
      }
    }
    var f, {
      document: m
    } = S.getWindow(e);
    if (m.caretRangeFromPoint)
      f = m.caretRangeFromPoint(n, r);
    else {
      var p = m.caretPositionFromPoint(n, r);
      p && (f = m.createRange(), f.setStart(p.offsetNode, p.offset), f.setEnd(p.offsetNode, p.offset));
    }
    if (!f)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var w = S.toSlateRange(e, f, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return w;
  },
  findKey: (e, t) => {
    var n = Qr.get(t);
    return n || (n = new Uc(), Qr.set(t, n)), n;
  },
  findPath: (e, t) => {
    for (var n = [], r = t; ; ) {
      var i = qc.get(r);
      if (i == null) {
        if (I.isEditor(r))
          return n;
        break;
      }
      var o = Wc.get(r);
      if (o == null)
        break;
      n.unshift(o), r = i;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(re.stringify(t)));
  },
  focus: function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!Tt.get(t)) {
      if (n.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (t.operations.length > 0) {
        setTimeout(() => {
          S.focus(t, {
            retries: n.retries - 1
          });
        }, 10);
        return;
      }
      var r = S.toDOMNode(t, t), i = S.findDocumentOrShadowRoot(t);
      if (i.activeElement !== r) {
        if (t.selection && i instanceof Document) {
          var o = Yr(i), s = S.toDOMRange(t, t.selection);
          o == null || o.removeAllRanges(), o == null || o.addRange(s);
        }
        t.selection || qe.select(t, I.start(t, [])), Tt.set(t, !0), r.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (e) => {
    var t = Kc.get(e);
    if (!t)
      throw new Error("Unable to find a host window element for this editor");
    return t;
  },
  hasDOMNode: function(t, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: i = !1
    } = r, o = S.toDOMNode(t, t), s;
    try {
      s = Se(n) ? n : n.parentElement;
    } catch (l) {
      if (l instanceof Error && !l.message.includes('Permission denied to access property "nodeType"'))
        throw l;
    }
    return s ? s.closest("[data-slate-editor]") === o && (!i || s.isContentEditable ? !0 : typeof s.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    s.closest('[contenteditable="false"]') === o || !!s.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (e, t) => zt(t) && S.hasDOMNode(e, t, {
    editable: !0
  }),
  hasRange: (e, t) => {
    var {
      anchor: n,
      focus: r
    } = t;
    return I.hasPath(e, n.path) && I.hasPath(e, r.path);
  },
  hasSelectableTarget: (e, t) => S.hasEditableTarget(e, t) || S.isTargetInsideNonReadonlyVoid(e, t),
  hasTarget: (e, t) => zt(t) && S.hasDOMNode(e, t),
  insertData: (e, t) => {
    e.insertData(t);
  },
  insertFragmentData: (e, t) => e.insertFragmentData(t),
  insertTextData: (e, t) => e.insertTextData(t),
  isComposing: (e) => !!Vc.get(e),
  isFocused: (e) => !!Tt.get(e),
  isReadOnly: (e) => !!ei.get(e),
  isTargetInsideNonReadonlyVoid: (e, t) => {
    if (ei.get(e)) return !1;
    var n = S.hasTarget(e, t) && S.toSlateNode(e, t);
    return Te.isElement(n) && I.isVoid(e, n);
  },
  setFragmentData: (e, t, n) => e.setFragmentData(t, n),
  toDOMNode: (e, t) => {
    var n = Gc.get(e), r = I.isEditor(t) ? $c.get(e) : n == null ? void 0 : n.get(S.findKey(e, t));
    if (!r)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(re.stringify(t)));
    return r;
  },
  toDOMPoint: (e, t) => {
    var [n] = I.node(e, t.path), r = S.toDOMNode(e, n), i;
    I.void(e, {
      at: t
    }) && (t = {
      path: t.path,
      offset: 0
    });
    for (var o = "[data-slate-string], [data-slate-zero-width]", s = Array.from(r.querySelectorAll(o)), l = 0, c = 0; c < s.length; c++) {
      var u = s[c], d = u.childNodes[0];
      if (!(d == null || d.textContent == null)) {
        var {
          length: h
        } = d.textContent, f = u.getAttribute("data-slate-length"), m = f == null ? h : parseInt(f, 10), p = l + m, w = s[c + 1];
        if (t.offset === p && w !== null && w !== void 0 && w.hasAttribute("data-slate-mark-placeholder")) {
          var C, g = w.childNodes[0];
          i = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            g instanceof Tc ? g : w,
            (C = w.textContent) !== null && C !== void 0 && C.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (t.offset <= p) {
          var b = Math.min(h, Math.max(0, t.offset - l));
          i = [d, b];
          break;
        }
        l = p;
      }
    }
    if (!i)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(re.stringify(t)));
    return i;
  },
  toDOMRange: (e, t) => {
    var {
      anchor: n,
      focus: r
    } = t, i = P.isBackward(t), o = S.toDOMPoint(e, n), s = P.isCollapsed(t) ? o : S.toDOMPoint(e, r), l = S.getWindow(e), c = l.document.createRange(), [u, d] = i ? s : o, [h, f] = i ? o : s, m = Se(u) ? u : u.parentElement, p = !!m.getAttribute("data-slate-zero-width"), w = Se(h) ? h : h.parentElement, C = !!w.getAttribute("data-slate-zero-width");
    return c.setStart(u, p ? 1 : d), c.setEnd(h, C ? 1 : f), c;
  },
  toSlateNode: (e, t) => {
    var n = Se(t) ? t : t.parentElement;
    n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
    var r = n ? Zc.get(n) : null;
    if (!r)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(n));
    return r;
  },
  toSlatePoint: (e, t, n) => {
    var {
      exactMatch: r,
      suppressThrow: i,
      searchDirection: o = "backward"
    } = n, [s, l] = r ? t : Fc(t), c = s.parentNode, u = null, d = 0;
    if (c) {
      var h, f, m = S.toDOMNode(e, e), p = c.closest('[data-slate-void="true"]'), w = p && m.contains(p) ? p : null, C = c.closest('[contenteditable="false"]'), g = C && m.contains(C) ? C : null, b = c.closest("[data-slate-leaf]"), y = null;
      if (b) {
        if (u = b.closest('[data-slate-node="text"]'), u) {
          var x = S.getWindow(e), E = x.document.createRange();
          E.setStart(u, 0), E.setEnd(s, l);
          var M = E.cloneContents(), Y = [...Array.prototype.slice.call(M.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(M.querySelectorAll("[contenteditable=false]"))];
          Y.forEach((A) => {
            if (wn && !r && A.hasAttribute("data-slate-zero-width") && A.textContent.length > 0 && A.textContext !== "\uFEFF") {
              A.textContent.startsWith("\uFEFF") && (A.textContent = A.textContent.slice(1));
              return;
            }
            A.parentNode.removeChild(A);
          }), d = M.textContent.length, y = u;
        }
      } else if (w) {
        for (var D = w.querySelectorAll("[data-slate-leaf]"), G = 0; G < D.length; G++) {
          var se = D[G];
          if (S.hasDOMNode(e, se)) {
            b = se;
            break;
          }
        }
        b ? (u = b.closest('[data-slate-node="text"]'), y = b, d = y.textContent.length, y.querySelectorAll("[data-slate-zero-width]").forEach((A) => {
          d -= A.textContent.length;
        })) : d = 1;
      } else if (g) {
        var X = (A) => A ? A.querySelectorAll(
          // Exclude leaf nodes in nested editors
          "[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])"
        ) : [], $ = g.closest('[data-slate-node="element"]');
        if (o === "forward") {
          var N, ue = [...X($), ...X($ == null ? void 0 : $.nextElementSibling)];
          b = (N = ue.find((A) => Nc(g, A))) !== null && N !== void 0 ? N : null;
        } else {
          var ve, Be = [...X($ == null ? void 0 : $.previousElementSibling), ...X($)];
          b = (ve = Be.findLast((A) => Xr(g, A))) !== null && ve !== void 0 ? ve : null;
        }
        b && (u = b.closest('[data-slate-node="text"]'), y = b, o === "forward" ? d = 0 : (d = y.textContent.length, y.querySelectorAll("[data-slate-zero-width]").forEach((A) => {
          d -= A.textContent.length;
        })));
      }
      y && d === y.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      wn && y.getAttribute("data-slate-zero-width") === "z" && (h = y.textContent) !== null && h !== void 0 && h.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (c.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      Dt && (f = y.textContent) !== null && f !== void 0 && f.endsWith(`

`)) && d--;
    }
    if (wn && !u && !r) {
      var Ge = c.hasAttribute("data-slate-node") ? c : c.closest("[data-slate-node]");
      if (Ge && S.hasDOMNode(e, Ge, {
        editable: !0
      })) {
        var ct = S.toSlateNode(e, Ge), {
          path: Re,
          offset: Ve
        } = I.start(e, S.findPath(e, ct));
        return Ge.querySelector("[data-slate-leaf]") || (Ve = l), {
          path: Re,
          offset: Ve
        };
      }
    }
    if (!u) {
      if (i)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t));
    }
    var Ne = S.toSlateNode(e, u), Ot = S.findPath(e, Ne);
    return {
      path: Ot,
      offset: d
    };
  },
  toSlateRange: (e, t, n) => {
    var r, {
      exactMatch: i,
      suppressThrow: o
    } = n, s = Vr(t) ? t.anchorNode : t.startContainer, l, c, u, d, h;
    if (s)
      if (Vr(t)) {
        if (Dt && t.rangeCount > 1) {
          u = t.focusNode;
          var f = t.getRangeAt(0), m = t.getRangeAt(t.rangeCount - 1);
          if (u instanceof HTMLTableRowElement && f.startContainer instanceof HTMLTableRowElement && m.startContainer instanceof HTMLTableRowElement) {
            let M = function(Y) {
              return Y.childElementCount > 0 ? M(Y.children[0]) : Y;
            };
            var p = f.startContainer, w = m.startContainer, C = M(p.children[f.startOffset]), g = M(w.children[m.startOffset]);
            d = 0, g.childNodes.length > 0 ? l = g.childNodes[0] : l = g, C.childNodes.length > 0 ? u = C.childNodes[0] : u = C, g instanceof HTMLElement ? c = g.innerHTML.length : c = 0;
          } else
            f.startContainer === u ? (l = m.endContainer, c = m.endOffset, d = f.startOffset) : (l = f.startContainer, c = f.endOffset, d = m.startOffset);
        } else
          l = t.anchorNode, c = t.anchorOffset, u = t.focusNode, d = t.focusOffset;
        Ac && Ic(l) || Dt ? h = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : h = t.isCollapsed;
      } else
        l = t.startContainer, c = t.startOffset, u = t.endContainer, d = t.endOffset, h = t.collapsed;
    if (l == null || u == null || c == null || d == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
    Dt && (r = u.textContent) !== null && r !== void 0 && r.endsWith(`

`) && d === u.textContent.length && d--;
    var b = S.toSlatePoint(e, [l, c], {
      exactMatch: i,
      suppressThrow: o
    });
    if (!b)
      return null;
    var y = Xr(l, u) || l === u && d < c, x = h ? b : S.toSlatePoint(e, [u, d], {
      exactMatch: i,
      suppressThrow: o,
      searchDirection: y ? "forward" : "backward"
    });
    if (!x)
      return null;
    var E = {
      anchor: b,
      focus: x
    };
    return P.isExpanded(E) && P.isForward(E) && Se(u) && I.void(e, {
      at: E.focus,
      mode: "highest"
    }) && (E = I.unhangRange(e, E, {
      voids: !0
    })), E;
  }
}, Jc = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
}, Qc = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
}, e1 = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, q = (e) => {
  var t = Jc[e], n = Qc[e], r = e1[e], i = t && _e.isHotkey(t), o = n && _e.isHotkey(n), s = r && _e.isHotkey(r);
  return (l) => !!(i && i(l) || Jr && o && o(l) || !Jr && s && s(l));
};
q("bold"), q("compose"), q("moveBackward"), q("moveForward"), q("deleteBackward"), q("deleteForward"), q("deleteLineBackward"), q("deleteLineForward"), q("deleteWordBackward"), q("deleteWordForward"), q("extendBackward"), q("extendForward"), q("extendLineBackward"), q("extendLineForward"), q("italic"), q("moveLineBackward"), q("moveLineForward"), q("moveWordBackward"), q("moveWordForward"), q("redo"), q("insertSoftBreak"), q("splitBlock"), q("transposeCharacter"), q("undo");
var ti;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ti || (ti = {}));
var Qn = function(e) {
  return Object.freeze(e);
}, t1 = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Qn(this);
  }
  return e;
}(), n1 = function() {
  function e(t, n, r, i) {
    return this.x = t, this.y = n, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Qn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, i = t.top, o = t.right, s = t.bottom, l = t.left, c = t.width, u = t.height;
    return { x: n, y: r, top: i, right: o, bottom: s, left: l, width: c, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), ni = typeof window < "u" ? window : {};
/msie|trident/i.test(ni.navigator && ni.navigator.userAgent);
var yn = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new t1((n ? t : e) || 0, (n ? e : t) || 0);
};
Qn({
  devicePixelContentBoxSize: yn(),
  borderBoxSize: yn(),
  contentBoxSize: yn(),
  contentRect: new n1(0, 0, 0, 0)
});
function yt(e) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yt(e);
}
function r1(e, t) {
  if (yt(e) !== "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (yt(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function i1(e) {
  var t = r1(e, "string");
  return yt(t) === "symbol" ? t : String(t);
}
function It(e, t, n) {
  return t = i1(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var o1 = /* @__PURE__ */ Rn(null), et = S, a1 = (e, t) => {
  var n = [], r = () => {
    n = [];
  }, i = (s) => {
    if (t.current) {
      var l = s.filter((c) => So(e, c, s));
      n.push(...l);
    }
  };
  function o() {
    n.length > 0 && (n.reverse().forEach((s) => {
      s.type !== "characterData" && (s.removedNodes.forEach((l) => {
        s.target.insertBefore(l, s.nextSibling);
      }), s.addedNodes.forEach((l) => {
        s.target.removeChild(l);
      }));
    }), r());
  }
  return {
    registerMutations: i,
    restoreDOM: o,
    clear: r
  };
}, s1 = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class l1 extends pa {
  constructor() {
    super(...arguments), It(this, "context", null), It(this, "manager", null), It(this, "mutationObserver", null);
  }
  observe() {
    var t, {
      node: n
    } = this.props;
    if (!n.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (t = this.mutationObserver) === null || t === void 0 || t.observe(n.current, s1);
  }
  componentDidMount() {
    var {
      receivedUserInput: t
    } = this.props, n = this.context;
    this.manager = a1(n, t), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var t, n, r, i = (t = this.mutationObserver) === null || t === void 0 ? void 0 : t.takeRecords();
    if (i != null && i.length) {
      var o;
      (o = this.manager) === null || o === void 0 || o.registerMutations(i);
    }
    return (n = this.mutationObserver) === null || n === void 0 || n.disconnect(), (r = this.manager) === null || r === void 0 || r.restoreDOM(), null;
  }
  componentDidUpdate() {
    var t;
    (t = this.manager) === null || t === void 0 || t.clear(), this.observe();
  }
  componentWillUnmount() {
    var t;
    (t = this.mutationObserver) === null || t === void 0 || t.disconnect();
  }
  render() {
    return this.props.children;
  }
}
It(l1, "contextType", o1);
parseInt(Ue.version.split(".")[0], 10);
const c1 = ({
  board: e,
  title: t
}) => {
  const { appState: n, setAppState: r } = Ce();
  return /* @__PURE__ */ a(
    R,
    {
      className: T("property-button"),
      visible: !0,
      icon: gl,
      type: "button",
      title: t,
      "aria-label": t,
      onPointerUp: () => {
        const i = Ie(e)[0], o = va(i);
        Je.getLinkElement(o) || Je.wrapLink(o, "链接", ""), setTimeout(() => {
          const c = Je.getLinkElement(o)[0], u = et.toDOMNode(o, c);
          r({
            ...n,
            linkState: {
              editor: o,
              targetDom: u,
              targetElement: c,
              isEditing: !0,
              isHovering: !1,
              isHoveringOrigin: !1
            }
          });
        }, 0);
      }
    }
  );
}, u1 = () => {
  var f, m;
  const e = ee(), t = Ie(e), [n, r] = F(!1), i = xe(n), o = t.length > 0 && !hi(e) && !t.some(Q.isImage), { viewport: s, selection: l, children: c } = e, { refs: u, floatingStyles: d } = Wt({
    placement: "right-start",
    middleware: [An(32), Bn()]
  });
  let h = {
    fill: "red"
  };
  if (o && !n) {
    const p = t.some((b) => m1(e, b)) && !_.hasBeenTextEditing(e), w = t.some(
      (b) => p1(e, b)
    ), C = t.some((b) => Po(e, b)) && !_.hasBeenTextEditing(e), g = t.some((b) => g1(e, b)) && !_.hasBeenTextEditing(e);
    h = {
      ...h1(e),
      hasFill: p,
      hasFontColor: w,
      hasStroke: C,
      hasStrokeStyle: g,
      hasText: w
    };
  }
  return ie(() => {
    if (o) {
      const p = t.length > 0;
      if (!n && p) {
        const w = Ie(e), C = ta(e, w, !1), [g, b] = tt.getPoints(C), y = rr(
          e,
          ir(e, g)
        ), x = rr(
          e,
          ir(e, b)
        ), E = x[0] - y[0], M = x[1] - y[1];
        u.setPositionReference({
          getBoundingClientRect() {
            return {
              width: E,
              height: M,
              x: y[0],
              y: y[1],
              top: y[1],
              left: y[0],
              right: y[0] + E,
              bottom: y[1] + M
            };
          }
        });
      }
    }
  }, [s, l, c, n]), ie(() => {
    i.current = n;
  }, [n]), ie(() => {
    const { pointerUp: p, pointerMove: w } = e;
    return e.pointerMove = (C) => {
      (bn(e) || Cn(e)) && !i.current && r(!0), w(C);
    }, e.pointerUp = (C) => {
      i.current && (bn(e) || Cn(e)) && r(!1), p(C);
    }, () => {
      e.pointerUp = p, e.pointerMove = w;
    };
  }, [e]), /* @__PURE__ */ a(ke, { children: o && !n && /* @__PURE__ */ a(
    pe,
    {
      padding: 1,
      className: T("popup-toolbar", Ae),
      ref: u.setFloating,
      style: d,
      children: /* @__PURE__ */ k(oe.Row, { gap: 1, children: [
        h.hasFontColor && /* @__PURE__ */ a(
          Wl,
          {
            board: e,
            currentColor: (f = h.marks) == null ? void 0 : f.color,
            title: "Font Color",
            fontColorIcon: /* @__PURE__ */ a(ll, { currentColor: (m = h.marks) == null ? void 0 : m.color })
          },
          0
        ),
        h.hasStroke && /* @__PURE__ */ a(
          ql,
          {
            board: e,
            currentColor: h.strokeColor,
            title: "Stroke",
            hasStrokeStyle: h.hasStrokeStyle || !1,
            children: /* @__PURE__ */ a(
              "label",
              {
                className: T("stroke-label", "color-label"),
                style: { borderColor: h.strokeColor }
              }
            )
          },
          1
        ),
        h.hasFill && /* @__PURE__ */ a(
          Kl,
          {
            board: e,
            currentColor: h.fill,
            title: "Fill Color",
            children: /* @__PURE__ */ a(
              "label",
              {
                className: T("fill-label", "color-label", {
                  "color-white": h.fill && so(Ze(h.fill))
                }),
                style: { backgroundColor: h.fill }
              }
            )
          },
          2
        ),
        h.hasText && /* @__PURE__ */ a(
          c1,
          {
            board: e,
            title: "Link"
          },
          3
        )
      ] })
    }
  ) });
}, d1 = (e, t) => {
  const n = zn(t);
  return {
    fill: t.fill,
    strokeColor: Mi(e, t),
    marks: n
  };
}, f1 = (e, t) => {
  const n = zn(t);
  return {
    fill: t.fill,
    strokeColor: Pi(e, t),
    marks: n
  };
}, h1 = (e) => {
  const t = Ie(e)[0];
  return Ee.isMindElement(e, t) ? d1(e, t) : f1(e, t);
}, m1 = (e, t) => Ee.isMindElement(e, t) || Nn(e, t) ? !0 : Q.isDrawElement(t) ? Q.isShapeElement(t) && !Q.isImage(t) && !Q.isText(t) && Si(t) : !1, Po = (e, t) => Ee.isMindElement(e, t) || we.isFreehand(t) ? !0 : Q.isDrawElement(t) ? Q.isShapeElement(t) && !Q.isImage(t) && !Q.isText(t) || Q.isArrowLine(t) || Q.isVectorLine(t) || Q.isTable(t) : !1, g1 = (e, t) => Po(e, t), p1 = (e, t) => Ee.isMindElement(e, t) ? !0 : Q.isDrawElement(t) ? Sa([t]) : !1, Lo = ({
  icon: e,
  shortcut: t,
  href: n,
  children: r,
  onSelect: i,
  className: o = "",
  selected: s,
  ...l
}) => {
  const c = Qi(l.onClick, i);
  return /* @__PURE__ */ a(
    "a",
    {
      ...l,
      href: n,
      target: "_blank",
      rel: "noreferrer",
      className: On(o, s),
      title: l.title ?? l["aria-label"],
      onClick: c,
      children: /* @__PURE__ */ a(eo, { icon: e, shortcut: t, children: r })
    }
  );
};
Lo.displayName = "MenuItemLink";
const Mo = () => {
  const e = ee(), { t } = ne();
  return /* @__PURE__ */ a(
    ae,
    {
      "data-testid": "save-button",
      onSelect: () => {
        Ui(e);
      },
      icon: Js,
      "aria-label": t("menu.saveFile"),
      shortcut: "Cmd+S",
      children: t("menu.saveFile")
    }
  );
};
Mo.displayName = "SaveToFile";
const Do = () => {
  const e = ee(), t = Yo(), { t: n } = ne(), r = (i, o, s) => {
    e.children = i, e.viewport = o || { zoom: 1 }, e.theme = { themeColorMode: ze.default }, t.update(e.children, {
      board: e,
      parent: e,
      parentG: _.getElementHost(e)
    }), J.fitViewport(e);
  };
  return /* @__PURE__ */ a(
    ae,
    {
      "data-testid": "open-button",
      onSelect: () => {
        us(e).then((i) => {
          r(i.elements, i.viewport);
        });
      },
      icon: Qs,
      "aria-label": n("menu.open"),
      children: n("menu.open")
    }
  );
};
Do.displayName = "OpenFile";
const To = () => {
  const e = ee(), t = Ct(qt), { t: n } = ne();
  return /* @__PURE__ */ a(
    ae,
    {
      icon: Vs,
      "data-testid": "image-export-button",
      onSelect: () => {
        Ft(e, !0);
      },
      submenu: /* @__PURE__ */ k(ot, { onSelect: () => {
        var i;
        const r = new CustomEvent(nt.MENU_ITEM_SELECT, {
          bubbles: !0,
          cancelable: !0
        });
        (i = t.onSelect) == null || i.call(t, r);
      }, children: [
        /* @__PURE__ */ a(
          ae,
          {
            onSelect: () => {
              Ft(e, !0);
            },
            "aria-label": n("menu.exportImage.png"),
            children: n("menu.exportImage.png")
          }
        ),
        /* @__PURE__ */ a(
          ae,
          {
            onSelect: () => {
              Ft(e, !1);
            },
            "aria-label": n("menu.exportImage.jpg"),
            children: n("menu.exportImage.jpg")
          }
        )
      ] }),
      shortcut: "Cmd+Shift+E",
      "aria-label": n("menu.exportImage"),
      children: n("menu.exportImage")
    }
  );
};
To.displayName = "SaveAsImage";
const _o = () => {
  const { appState: e, setAppState: t } = Ce(), { t: n } = ne();
  return /* @__PURE__ */ a(
    ae,
    {
      icon: Rt,
      "data-testid": "reset-button",
      onSelect: () => {
        t({
          ...e,
          openCleanConfirm: !0
        });
      },
      shortcut: "Cmd+Backspace",
      "aria-label": n("menu.cleanBoard"),
      children: n("menu.cleanBoard")
    }
  );
};
_o.displayName = "CleanBoard";
const Fo = () => /* @__PURE__ */ a(
  Lo,
  {
    icon: Gs,
    href: "https://github.com/plait-board/drawnix",
    "aria-label": "GitHub",
    children: "GitHub"
  }
);
Fo.displayName = "Socials";
const Io = () => {
  const { language: e, setLanguage: t, t: n } = ne(), r = Ct(qt);
  return /* @__PURE__ */ a(
    ae,
    {
      icon: qi,
      "data-testid": "language-switcher-button",
      onSelect: () => {
      },
      submenu: /* @__PURE__ */ k(ot, { onSelect: () => {
        var o;
        const i = new CustomEvent(nt.MENU_ITEM_SELECT, {
          bubbles: !0,
          cancelable: !0
        });
        (o = r.onSelect) == null || o.call(r, i);
      }, children: [
        /* @__PURE__ */ a(
          ae,
          {
            onSelect: () => {
              t("zh");
            },
            "aria-label": n("language.chinese"),
            selected: e === "zh",
            children: n("language.chinese")
          }
        ),
        /* @__PURE__ */ a(
          ae,
          {
            onSelect: () => {
              t("en");
            },
            "aria-label": n("language.english"),
            selected: e === "en",
            children: n("language.english")
          }
        )
      ] }),
      "aria-label": n("language.switcher"),
      children: n("language.switcher")
    }
  );
};
Io.displayName = "LanguageSwitcherMenu";
const Ro = () => /* @__PURE__ */ a(
  "div",
  {
    style: {
      height: "1px",
      backgroundColor: "var(--color-gray-10)",
      margin: ".5rem 0"
    }
  }
);
Ro.displayName = "MenuSeparator";
const v1 = () => {
  const e = ee(), { t } = ne(), n = _.getBoardContainer(e), r = Ie(e), [i, o] = F(!1), s = e.history.undos.length <= 0, l = e.history.redos.length <= 0;
  return /* @__PURE__ */ a(
    pe,
    {
      padding: 1,
      className: T("app-toolbar", Ae),
      children: /* @__PURE__ */ k(oe.Row, { gap: 1, children: [
        /* @__PURE__ */ k(
          Pe,
          {
            sideOffset: 12,
            open: i,
            onOpenChange: (c) => {
              o(c);
            },
            placement: "bottom-start",
            children: [
              /* @__PURE__ */ a(Le, { asChild: !0, children: /* @__PURE__ */ a(
                R,
                {
                  type: "icon",
                  visible: !0,
                  selected: i,
                  icon: qi,
                  title: t("general.menu"),
                  "aria-label": t("general.menu"),
                  onPointerDown: () => {
                    o(!i);
                  }
                }
              ) }),
              /* @__PURE__ */ a(Me, { container: n, children: /* @__PURE__ */ k(
                ot,
                {
                  onSelect: () => {
                    o(!1);
                  },
                  children: [
                    /* @__PURE__ */ a(Do, {}),
                    /* @__PURE__ */ a(Mo, {}),
                    /* @__PURE__ */ a(To, {}),
                    /* @__PURE__ */ a(_o, {}),
                    /* @__PURE__ */ a(Ro, {}),
                    /* @__PURE__ */ a(Io, {}),
                    /* @__PURE__ */ a(Fo, {})
                  ]
                }
              ) })
            ]
          },
          0
        ),
        /* @__PURE__ */ a(
          R,
          {
            type: "icon",
            icon: cl,
            visible: !0,
            title: t("general.undo"),
            "aria-label": t("general.undo"),
            onPointerUp: () => {
              e.undo();
            },
            disabled: s
          },
          1
        ),
        /* @__PURE__ */ a(
          R,
          {
            type: "icon",
            icon: ul,
            visible: !0,
            title: t("general.redo"),
            "aria-label": t("general.redo"),
            onPointerUp: () => {
              e.redo();
            },
            disabled: l
          },
          2
        ),
        r.length > 0 && /* @__PURE__ */ a(
          R,
          {
            className: "duplicate",
            type: "icon",
            icon: dl,
            visible: !0,
            title: t("general.duplicate"),
            "aria-label": t("general.duplicate"),
            onPointerUp: () => {
              na(e);
            }
          },
          3
        ),
        r.length > 0 && /* @__PURE__ */ a(
          R,
          {
            className: "trash",
            type: "icon",
            icon: Rt,
            visible: !0,
            title: t("general.delete"),
            "aria-label": t("general.delete"),
            onPointerUp: () => {
              ra(e);
            }
          },
          4
        )
      ] })
    }
  );
}, w1 = (e) => (n) => {
  const { globalKeyDown: r } = n;
  return n.globalKeyDown = (i) => {
    if (!(i.target instanceof HTMLInputElement || i.target instanceof HTMLTextAreaElement) && (_.getMovingPointInBoard(n) || _.isMovingPointInBoard(n)) && !_.hasBeenTextEditing(n)) {
      if (_e.isHotkey(["mod+shift+e"], { byKey: !0 })(i)) {
        Ft(n, !0), i.preventDefault();
        return;
      }
      if (_e.isHotkey(["mod+s"], { byKey: !0 })(i)) {
        Ui(n), i.preventDefault();
        return;
      }
      if (_e.isHotkey(["mod+backspace"])(i) || _e.isHotkey(["mod+delete"])(i)) {
        e({
          openCleanConfirm: !0
        }), i.preventDefault();
        return;
      }
      if (i.key === "h" && (J.updatePointerType(n, ye.hand), e({ pointer: ye.hand })), i.key === "v" && (J.updatePointerType(n, ye.selection), e({ pointer: ye.selection })), i.key === "m" && (de(n, fe.dnd), J.updatePointerType(n, kn.mind), e({ pointer: kn.mind })), i.key === "e" && (de(n, fe.drawing), J.updatePointerType(n, he.eraser), e({ pointer: he.eraser })), i.key === "p" && (de(n, fe.drawing), J.updatePointerType(n, he.feltTipPen), e({ pointer: he.feltTipPen })), i.key === "a" && !_e.isHotkey(["mod+a"])(i) && Ie(n).length === 0 && (de(n, fe.drawing), J.updatePointerType(n, We.straight), e({ pointer: We.straight })), i.key === "r" || i.key === "o" || i.key === "t") {
        const s = {
          r: le.rectangle,
          o: le.ellipse,
          t: le.text
        };
        s[i.key] === le.text ? de(n, fe.dnd) : de(n, fe.drawing), J.updatePointerType(n, s[i.key]), e({ pointer: s[i.key] });
      }
      _e.isHotkey(["mod+u"])(i) && io(n);
    }
    r(i);
  }, n;
};
function y1() {
  return [he.feltTipPen, he.eraser];
}
const ri = (e, t) => ({
  id: aa(),
  type: "freehand",
  shape: e,
  points: t
}), No = (e, t, n) => {
  const r = ia(e, n, t) || n, i = t.points;
  return La(t.points) ? oa(r, i) || sr(i, r) : sr(i, r);
}, C1 = (e, t, n) => {
  const r = tt.getRectangleByPoints([
    n.anchor,
    n.focus
  ]);
  return Pa(
    r,
    t.points,
    t.angle
  );
}, ii = (e) => Ie(e).filter((t) => we.isFreehand(t)), b1 = (e) => $i[e].strokeColor, k1 = (e) => $i[e].fill, x1 = (e, t) => {
  const n = b1(
    e.theme.themeColorMode
  );
  return t.strokeColor || n;
}, E1 = (e, t) => {
  const n = we.isFreehand(t) && Nn(e, t) ? k1(e.theme.themeColorMode) : Ma.fill;
  return t.fill || n;
};
function O1(e, t) {
  return Math.exp(-(e * e) / (2 * t * t));
}
function S1(e, t, n) {
  if (e.length < 2) return e;
  const r = Math.floor(n / 2), i = [];
  function o(l) {
    if (l < 0) {
      const c = -l - 1;
      if (c < e.length)
        return [
          2 * e[0][0] - e[c][0],
          2 * e[0][1] - e[c][1]
        ];
    } else if (l >= e.length) {
      const c = 2 * e.length - l - 1;
      if (c >= 0)
        return [
          2 * e[e.length - 1][0] - e[c][0],
          2 * e[e.length - 1][1] - e[c][1]
        ];
    }
    return e[l];
  }
  function s(l) {
    const c = Math.min(l, e.length - 1 - l);
    return Math.min(r, c + Math.floor(r / 2));
  }
  for (let l = 0; l < e.length; l++) {
    let c = 0, u = 0, d = 0;
    const h = s(l);
    for (let f = -h; f <= h; f++) {
      const m = l + f, p = o(m);
      let w = O1(f, t);
      if (l < r || l >= e.length - r) {
        const C = 1 + 0.5 * (1 - Math.abs(f) / h);
        w *= f === 0 ? C : 1;
      }
      c += p[0] * w, u += p[1] * w, d += w;
    }
    l === 0 || l === e.length - 1 ? i.push([e[l][0], e[l][1]]) : i.push([c / d, u / d]);
  }
  return i;
}
class Ao extends wa {
  draw(t) {
    const n = Da(t), r = x1(this.board, t), i = E1(this.board, t), o = { strokeWidth: n, stroke: r, fill: i, fillStyle: "solid" }, s = _.getRoughSVG(this.board).curve(
      S1(t.points, 1, 3),
      o
    );
    return sa(s, "round"), s;
  }
  canDraw(t) {
    return !0;
  }
}
class P1 extends ya {
  constructor() {
    super();
  }
  initializeGenerator() {
    this.activeGenerator = Ca(this.board, {
      getRectangle: (t) => tt.getRectangleByPoints(t.points),
      getStrokeWidth: () => la,
      getStrokeOpacity: () => 1,
      hasResizeHandle: () => ba(this.board, this.element)
    }), this.generator = new Ao(this.board);
  }
  initialize() {
    super.initialize(), this.initializeGenerator(), this.generator.processDrawing(this.element, this.getElementG());
  }
  onContextChanged(t, n) {
    t.element !== n.element || t.hasThemeChanged ? (this.generator.processDrawing(this.element, this.getElementG()), this.activeGenerator.processDrawing(
      this.element,
      _.getActiveHost(this.board),
      {
        selected: this.selected
      }
    )) : (t.selected !== n.selected || t.selected) && this.activeGenerator.processDrawing(
      this.element,
      _.getActiveHost(this.board),
      {
        selected: this.selected
      }
    );
  }
  destroy() {
    var t;
    super.destroy(), (t = this.activeGenerator) == null || t.destroy();
  }
}
class L1 {
  constructor(t = {}) {
    this.defaultOptions = {
      smoothing: 0.65,
      velocityWeight: 0.2,
      curvatureWeight: 0.3,
      minDistance: 0.2,
      // 降低最小距离阈值
      maxPoints: 8,
      pressureSensitivity: 0.5,
      tiltSensitivity: 0.3,
      velocityThreshold: 800,
      samplingRate: 5
      // 降低采样间隔
    }, this.points = [], this.lastProcessedTime = 0, this.movingAverageVelocity = [], this.velocityWindowSize = 3, this.options = { ...this.defaultOptions, ...t };
  }
  process(t, n = {}) {
    const r = n.timestamp ?? Date.now();
    if (this.points.length === 0) {
      const c = { point: t, timestamp: r, ...n };
      return this.points.push(c), this.lastProcessedTime = r, t;
    }
    if (r - this.lastProcessedTime < this.options.samplingRate && r - this.lastProcessedTime < 2)
      return null;
    const i = {
      point: t,
      timestamp: r,
      ...n
    };
    if (!this.checkDistance(t) && this.points.length > 1 && r - this.lastProcessedTime < 32)
      return null;
    this.updatePoints(i);
    const s = this.calculateDynamicParameters(i), l = this.smooth(t, s);
    return this.lastProcessedTime = r, l;
  }
  reset() {
    this.points = [], this.lastProcessedTime = 0, this.movingAverageVelocity = [];
  }
  updatePoints(t) {
    this.points.push(t), this.points.length > this.options.maxPoints && this.points.shift();
  }
  checkDistance(t) {
    if (this.points.length === 0) return !0;
    const n = this.points[this.points.length - 1].point, r = this.getDistance(n, t);
    let i = this.options.minDistance;
    if (this.movingAverageVelocity.length > 0) {
      const o = this.getAverageVelocity();
      i *= Math.max(0.5, Math.min(1.5, o / 200));
    }
    return r >= i;
  }
  calculateDynamicParameters(t) {
    const n = this.calculateVelocity(t);
    this.updateMovingAverage(n);
    const r = this.getAverageVelocity(), i = { ...this.options };
    if (t.pressure !== void 0) {
      const s = Math.pow(t.pressure, 1.2);
      i.smoothing *= 1 - s * i.pressureSensitivity * 0.8;
    }
    const o = Math.min(r / i.velocityThreshold, 1);
    if (i.velocityWeight = 0.2 + o * 0.3, i.smoothing *= 1 + o * 0.2, t.tiltX !== void 0 && t.tiltY !== void 0) {
      const s = Math.sqrt(t.tiltX ** 2 + t.tiltY ** 2) / 90;
      i.smoothing *= 1 + s * i.tiltSensitivity * 0.7;
    }
    return i;
  }
  smooth(t, n) {
    if (this.points.length < 2) return t;
    const r = this.calculateWeights(n), i = r.reduce((s, l) => s + l, 0);
    if (i === 0) return t;
    const o = [0, 0];
    for (let s = 0; s < this.points.length; s++) {
      const l = r[s] / i;
      o[0] += this.points[s].point[0] * l, o[1] += this.points[s].point[1] * l;
    }
    return o;
  }
  calculateWeights(t) {
    const n = [], r = this.points.length - 1;
    for (let i = 0; i < this.points.length; i++) {
      let o = Math.pow(t.smoothing, (r - i) * 0.8);
      if (i < r) {
        const s = this.getPointVelocity(i);
        o *= 1 + s * t.velocityWeight * 0.8;
      }
      if (i > 0 && i < r) {
        const s = this.getPointCurvature(i);
        o *= 1 + s * t.curvatureWeight * 0.7;
      }
      n.push(o);
    }
    return n;
  }
  // 工具方法保持不变
  getDistance(t, n) {
    return gi(t[0], t[1], n[0], n[1]);
  }
  calculateVelocity(t) {
    if (this.points.length < 2) return 0;
    const n = this.points[this.points.length - 1], r = this.getDistance(n.point, t.point), i = t.timestamp - n.timestamp;
    return i > 0 ? r / i : 0;
  }
  updateMovingAverage(t) {
    this.movingAverageVelocity.push(t), this.movingAverageVelocity.length > this.velocityWindowSize && this.movingAverageVelocity.shift();
  }
  getAverageVelocity() {
    return this.movingAverageVelocity.length === 0 ? 0 : this.movingAverageVelocity.reduce((t, n) => t + n) / this.movingAverageVelocity.length;
  }
  getPointVelocity(t) {
    if (t >= this.points.length - 1) return 0;
    const n = this.points[t], r = this.points[t + 1], i = this.getDistance(n.point, r.point), o = r.timestamp - n.timestamp;
    return o > 0 ? i / o : 0;
  }
  getPointCurvature(t) {
    if (t <= 0 || t >= this.points.length - 1) return 0;
    const n = this.points[t - 1].point, r = this.points[t].point, i = this.points[t + 1].point, o = this.getDistance(n, r), s = this.getDistance(r, i), l = this.getDistance(n, i), c = (o + s + l) / 2;
    return 4 * Math.sqrt(Math.max(0, c * (c - o) * (c - s) * (c - l))) / (o * s * l + 1e-4);
  }
}
const M1 = (e) => {
  const { pointerDown: t, pointerMove: n, pointerUp: r, globalPointerUp: i } = e;
  let o = !1, s = !1, l = [], c = null;
  const u = new Ao(e), d = new L1({
    smoothing: 0.7,
    pressureSensitivity: 0.6
  });
  let h = null;
  const f = (m) => {
    if (o) {
      const p = _.getPointer(e);
      s && l.push(l[0]), h = ri(p, l);
    }
    h && !m && Fe.insertNode(e, h, [e.children.length]), u == null || u.destroy(), h = null, o = !1, l = [], d.reset();
  };
  return e.pointerDown = (m) => {
    const p = y1();
    if (_.isInPointer(e, p) && xi(e)) {
      o = !0, c = [m.x, m.y];
      const C = d.process(c), g = dt(
        e,
        ft(e, C[0], C[1])
      );
      l.push(g);
    }
    t(m);
  }, e.pointerMove = (m) => {
    if (o) {
      const p = [m.x, m.y];
      c && gi(
        c[0],
        c[1],
        p[0],
        p[1]
      ) < 8 ? s = !0 : s = !1;
      const w = d.process(p);
      if (w) {
        u == null || u.destroy();
        const C = dt(
          e,
          ft(e, w[0], w[1])
        );
        l.push(C);
        const g = _.getPointer(e);
        h = ri(g, l), u.processDrawing(
          h,
          _.getElementTopHost(e)
        );
      }
      return;
    }
    n(m);
  }, e.pointerUp = (m) => {
    f(), r(m);
  }, e.globalPointerUp = (m) => {
    f(!0), i(m);
  }, e;
}, D1 = (e) => {
  const t = e, { getDeletedFragment: n, buildFragment: r, insertFragment: i } = t;
  return t.getDeletedFragment = (o) => {
    const s = ii(t);
    return s.length && o.push(...s), n(o);
  }, t.buildFragment = (o, s, l, c) => {
    const u = ii(t);
    if (u.length) {
      const d = ka(
        t,
        u,
        s ? [s.x, s.y] : [0, 0]
      );
      o = ca(o, {
        text: "",
        type: ua.elements,
        elements: d
      });
    }
    return r(
      o,
      s,
      l,
      c
    );
  }, t.insertFragment = (o, s, l) => {
    var u;
    const c = (u = o == null ? void 0 : o.elements) == null ? void 0 : u.filter(
      (d) => we.isFreehand(d)
    );
    c && c.length > 0 && xa(t, c, s), i(o, s, l);
  }, t;
}, T1 = (e) => {
  const { pointerDown: t, pointerMove: n, pointerUp: r, globalPointerUp: i } = e;
  let o = !1;
  const s = /* @__PURE__ */ new Set(), l = (d) => {
    const h = dt(e, ft(e, d[0], d[1]));
    e.children.filter(
      (m) => we.isFreehand(m)
    ).forEach((m) => {
      !s.has(m.id) && No(e, m, h) && (da.getElementG(m).style.opacity = "0.2", s.add(m.id));
    });
  }, c = () => {
    if (s.size > 0) {
      const d = e.children.filter(
        (h) => s.has(h.id)
      );
      d.length > 0 && fa.removeElements(e, d);
    }
  }, u = () => {
    o && (c(), o = !1, s.clear());
  };
  return e.pointerDown = (d) => {
    if (_.isInPointer(e, [he.eraser]) && xi(e)) {
      o = !0, s.clear();
      const f = [d.x, d.y];
      l(f);
      return;
    }
    t(d);
  }, e.pointerMove = (d) => {
    if (o) {
      pi(e, "with-freehand-erase", () => {
        const h = [d.x, d.y];
        l(h);
      });
      return;
    }
    n(d);
  }, e.pointerUp = (d) => {
    if (o) {
      u();
      return;
    }
    r(d);
  }, e.globalPointerUp = (d) => {
    if (o) {
      u();
      return;
    }
    i(d);
  }, e;
}, _1 = (e) => {
  const {
    getRectangle: t,
    drawElement: n,
    isHit: r,
    isRectangleHit: i,
    getOneHitElement: o,
    isMovable: s,
    isAlign: l
  } = e;
  return e.drawElement = (c) => we.isFreehand(c.element) ? P1 : n(c), e.getRectangle = (c) => we.isFreehand(c) ? tt.getRectangleByPoints(c.points) : t(c), e.isRectangleHit = (c, u) => we.isFreehand(c) ? C1(e, c, u) : i(c, u), e.isHit = (c, u, d) => we.isFreehand(c) ? No(e, c, u) : r(c, u, d), e.getOneHitElement = (c) => c.every((d) => we.isFreehand(d)) ? Ta(e, c) : o(c), e.isMovable = (c) => we.isFreehand(c) ? !0 : s(c), e.isAlign = (c) => we.isFreehand(c) ? !0 : l(c), e.setPluginOptions(
    _a,
    { customGeometryTypes: [Zi] }
  ), T1(D1(M1(e)));
}, F1 = () => {
  const e = ee(), { t } = ne(), n = e.theme;
  return /* @__PURE__ */ a(
    pe,
    {
      padding: 1,
      className: T("theme-toolbar", Ae),
      children: /* @__PURE__ */ k(
        "select",
        {
          onChange: (r) => {
            const i = r.target.value;
            J.updateThemeColor(e, i);
          },
          value: n.themeColorMode,
          children: [
            /* @__PURE__ */ a("option", { value: "default", children: t("theme.default") }),
            /* @__PURE__ */ a("option", { value: "colorful", children: t("theme.colorful") }),
            /* @__PURE__ */ a("option", { value: "soft", children: t("theme.soft") }),
            /* @__PURE__ */ a("option", { value: "retro", children: t("theme.retro") }),
            /* @__PURE__ */ a("option", { value: "dark", children: t("theme.dark") }),
            /* @__PURE__ */ a("option", { value: "starry", children: t("theme.starry") })
          ]
        }
      )
    }
  );
}, Bo = /* @__PURE__ */ new WeakMap(), oi = (e) => !!Bo.get(e), zo = (e, t) => {
  Bo.set(e, t);
}, I1 = (e) => (n) => {
  const { pointerDown: r } = n;
  return n.pointerDown = (i) => {
    or(i) && !oi(n) && (zo(n, !0), e({ isPencilMode: !0 })), !(oi(n) && !or(i)) && r(i);
  }, n;
}, R1 = () => {
  const e = ee(), { appState: t, setAppState: n } = Ce();
  return /* @__PURE__ */ a(ke, { children: t.isPencilMode && /* @__PURE__ */ a("div", { className: "pencil-mode-toolbar", children: /* @__PURE__ */ a(
    R,
    {
      type: "button",
      visible: !0,
      title: "X Pencil",
      "aria-label": "Arrow",
      label: "Pencil X",
      onPointerDown: () => {
        n({ ...t, isPencilMode: !1 }), zo(e, !1);
      }
    }
  ) }) });
};
function N1({
  initialOpen: e = !1,
  open: t,
  onOpenChange: n
} = {}) {
  const [r, i] = U.useState(e), [o, s] = U.useState(), [l, c] = U.useState(), u = t ?? r, d = n ?? i, h = Wt({
    open: u,
    onOpenChange: d
  }), f = h.context, m = Ii(f, {
    enabled: t == null
  }), p = Ri(f, { outsidePressEvent: "mousedown" }), w = Ni(f), C = Ai([m, p, w]);
  return U.useMemo(
    () => ({
      open: u,
      setOpen: d,
      ...C,
      ...h,
      labelId: o,
      descriptionId: l,
      setLabelId: s,
      setDescriptionId: c
    }),
    [u, d, C, h, o, l]
  );
}
const jo = U.createContext(null), Et = () => {
  const e = U.useContext(jo);
  if (e == null)
    throw new Error("Dialog components must be wrapped in <Dialog />");
  return e;
};
function _n({
  children: e,
  ...t
}) {
  const n = N1(t);
  return /* @__PURE__ */ a(jo.Provider, { value: n, children: e });
}
U.forwardRef(function({ children: t, asChild: n = !1, ...r }, i) {
  const o = Et(), s = t.ref, l = Ut([o.refs.setReference, i, s]);
  return n && U.isValidElement(t) ? U.cloneElement(
    t,
    o.getReferenceProps({
      ref: l,
      ...r,
      ...t.props,
      "data-state": o.open ? "open" : "closed"
    })
  ) : /* @__PURE__ */ a(
    "button",
    {
      ref: l,
      "data-state": o.open ? "open" : "closed",
      ...o.getReferenceProps(r),
      children: t
    }
  );
});
const Fn = U.forwardRef(function(t, n) {
  const { context: r, ...i } = Et(), o = Ut([i.refs.setFloating, n]);
  return r.open ? /* @__PURE__ */ a(_i, { root: t.container, children: /* @__PURE__ */ a(ja, { className: "Dialog-overlay", lockScroll: !0, children: /* @__PURE__ */ a(Fi, { context: r, children: /* @__PURE__ */ a(
    "div",
    {
      ref: o,
      "aria-labelledby": i.labelId,
      "aria-describedby": i.descriptionId,
      ...i.getFloatingProps(t),
      children: t.children
    }
  ) }) }) }) : null;
});
U.forwardRef(function({ children: t, ...n }, r) {
  const { setLabelId: i } = Et(), o = Bi();
  return U.useLayoutEffect(() => (i(o), () => i(void 0)), [o, i]), /* @__PURE__ */ a("h2", { ...n, ref: r, id: o, children: t });
});
U.forwardRef(function({ children: t, ...n }, r) {
  const { setDescriptionId: i } = Et(), o = Bi();
  return U.useLayoutEffect(() => (i(o), () => i(void 0)), [o, i]), /* @__PURE__ */ a("p", { ...n, ref: r, id: o, children: t });
});
U.forwardRef(function(t, n) {
  const { setOpen: r } = Et();
  return /* @__PURE__ */ a("button", { type: "button", ...t, ref: n, onClick: () => r(!1) });
});
const Ho = ({ children: e }) => /* @__PURE__ */ a("div", { className: "ttd-dialog-panels", children: e }), jt = ({
  label: e,
  children: t,
  panelAction: n,
  panelActionDisabled: r = !1,
  onTextSubmitInProgress: i,
  renderTopRight: o,
  renderSubmitShortcut: s,
  renderBottomRight: l
}) => /* @__PURE__ */ k("div", { className: "ttd-dialog-panel", children: [
  /* @__PURE__ */ k("div", { className: "ttd-dialog-panel__header", children: [
    /* @__PURE__ */ a("label", { children: e }),
    o == null ? void 0 : o()
  ] }),
  t,
  /* @__PURE__ */ k(
    "div",
    {
      className: T("ttd-dialog-panel-button-container", {
        invisible: !n
      }),
      style: { display: "flex", alignItems: "center" },
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            className: "ttd-dialog-panel-button drawnix-button ",
            onClick: n && n.action,
            disabled: r || i,
            children: /* @__PURE__ */ k("div", { className: T({ invisible: i }), children: [
              n == null ? void 0 : n.label,
              (n == null ? void 0 : n.icon) && /* @__PURE__ */ a("span", { children: n.icon })
            ] })
          }
        ),
        !r && !i && (s == null ? void 0 : s()),
        l == null ? void 0 : l()
      ]
    }
  )
] }), ai = {
  CTRL_OR_CMD: ha || mi ? "metaKey" : "ctrlKey",
  ENTER: "Enter"
}, Uo = ({
  input: e,
  placeholder: t,
  onChange: n,
  onKeyboardSubmit: r
}) => {
  const i = xe(null), o = xe(r);
  return o.current = r, ie(() => {
    if (!o.current)
      return;
    const s = i.current;
    if (s) {
      const l = (c) => {
        var u;
        c[ai.CTRL_OR_CMD] && c.key === ai.ENTER && (c.preventDefault(), (u = o.current) == null || u.call(o));
      };
      return s.addEventListener(nt.KEYDOWN, l), () => {
        s.removeEventListener(nt.KEYDOWN, l);
      };
    }
  }, []), /* @__PURE__ */ a(
    "textarea",
    {
      className: "ttd-dialog-input",
      onChange: n,
      value: e,
      placeholder: t,
      autoFocus: !0,
      ref: i
    }
  );
}, A1 = ({ error: e }) => /* @__PURE__ */ k(
  "div",
  {
    "data-testid": "ttd-dialog-output-error",
    className: "ttd-dialog-output-error",
    children: [
      "Error! ",
      /* @__PURE__ */ a("p", { children: e })
    ]
  }
), Wo = ({
  error: e,
  value: t,
  loaded: n
}) => {
  const r = [Li, Di, Ei, Wi], i = {
    readonly: !0,
    hideScrollbar: !1,
    disabledScrollOnNonFocus: !0,
    themeColors: Ti
  };
  return /* @__PURE__ */ k("div", { className: "ttd-dialog-output-wrapper", children: [
    e && /* @__PURE__ */ a(A1, { error: e.message }),
    /* @__PURE__ */ a(
      "div",
      {
        style: { opacity: e ? "0.15" : 1 },
        className: "ttd-dialog-output-canvas-container",
        children: /* @__PURE__ */ a(ui, { value: t, options: i, plugins: r, children: /* @__PURE__ */ a(di, {}) })
      }
    )
  ] });
}, qo = () => /* @__PURE__ */ k("div", { className: "ttd-dialog-submit-shortcut", children: [
  /* @__PURE__ */ a("div", { className: "ttd-dialog-submit-shortcut__key", children: hr("CtrlOrCmd") }),
  /* @__PURE__ */ a("div", { className: "ttd-dialog-submit-shortcut__key", children: hr("Enter") })
] }), B1 = `flowchart TD
 A[Christmas] -->|Get money| B(Go shopping)
 B --> C{Let me think}
 C -->|One| D[Laptop]
 C -->|Two| E[iPhone]
 C -->|Three| F[Car]`, z1 = () => {
  const { appState: e, setAppState: t } = Ce(), { t: n, language: r } = ne(), [i, o] = F({
    loaded: !1,
    api: Promise.resolve({
      parseMermaidToDrawnix: async () => ({ elements: [] })
    })
  });
  ie(() => {
    (async () => {
      try {
        const C = await import("@plait-board/mermaid-to-drawnix");
        o({
          loaded: !0,
          api: Promise.resolve(C)
        });
      } catch (C) {
        console.error("Failed to load mermaid library:", C), f(new Error(n("dialog.error.loadMermaid")));
      }
    })();
  }, []);
  const [s, l] = F(() => B1), [c, u] = F(() => []), d = Ci(s.trim()), [h, f] = F(null), m = ee();
  ie(() => {
    (async () => {
      try {
        const C = await i.api;
        let g;
        try {
          g = await C.parseMermaidToDrawnix(d);
        } catch {
          g = await C.parseMermaidToDrawnix(
            d.replace(/"/g, "'")
          );
        }
        const { elements: b } = g;
        u(b), f(null);
      } catch (C) {
        f(C);
      }
    })();
  }, [d, i]);
  const p = () => {
    if (!c.length)
      return;
    const w = _.getBoardContainer(m).getBoundingClientRect(), C = [
      w.width / 2,
      w.height / 2
    ], g = m.viewport.zoom, b = vi(m), y = b[0] + C[0] / g, x = b[1] + C[1] / g, E = c, M = tt.getBoundingRectangle(
      E.filter((D) => !ma.isGroup(D)).map(
        (D) => tt.getRectangleByPoints(D.points)
      )
    ), Y = [
      y - M.width / 2,
      x - M.height / 2
    ];
    m.insertFragment(
      {
        elements: JSON.parse(JSON.stringify(E))
      },
      Y,
      wi.paste
    ), t({ ...e, openDialogType: null });
  };
  return /* @__PURE__ */ k(ke, { children: [
    /* @__PURE__ */ a("div", { className: "ttd-dialog-desc", children: r === "zh" ? /* @__PURE__ */ k(ke, { children: [
      n("dialog.mermaid.description"),
      " ",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/flowchart.html",
          target: "_blank",
          rel: "noreferrer",
          children: n("dialog.mermaid.flowchart")
        }
      ),
      "、",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/sequenceDiagram.html",
          target: "_blank",
          rel: "noreferrer",
          children: n("dialog.mermaid.sequence")
        }
      ),
      " ",
      "和",
      " ",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/classDiagram.html",
          target: "_blank",
          rel: "noreferrer",
          children: n("dialog.mermaid.class")
        }
      ),
      n("dialog.mermaid.otherTypes")
    ] }) : /* @__PURE__ */ k(ke, { children: [
      n("dialog.mermaid.description"),
      " ",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/flowchart.html",
          target: "_blank",
          rel: "noreferrer",
          children: n("dialog.mermaid.flowchart")
        }
      ),
      ",",
      " ",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/sequenceDiagram.html",
          target: "_blank",
          rel: "noreferrer",
          children: n("dialog.mermaid.sequence")
        }
      ),
      ",",
      " ",
      /* @__PURE__ */ a(
        "a",
        {
          href: "https://mermaid.js.org/syntax/classDiagram.html",
          target: "_blank",
          rel: "noreferrer",
          children: n("dialog.mermaid.class")
        }
      ),
      n("dialog.mermaid.otherTypes")
    ] }) }),
    /* @__PURE__ */ k(Ho, { children: [
      /* @__PURE__ */ a(jt, { label: n("dialog.mermaid.syntax"), children: /* @__PURE__ */ a(
        Uo,
        {
          input: s,
          placeholder: n("dialog.mermaid.placeholder"),
          onChange: (w) => l(w.target.value),
          onKeyboardSubmit: () => {
            p();
          }
        }
      ) }),
      /* @__PURE__ */ a(
        jt,
        {
          label: n("dialog.mermaid.preview"),
          panelAction: {
            action: () => {
              p();
            },
            label: n("dialog.mermaid.insert")
          },
          renderSubmitShortcut: () => /* @__PURE__ */ a(qo, {}),
          children: /* @__PURE__ */ a(
            Wo,
            {
              value: c,
              loaded: i.loaded,
              error: h
            }
          )
        }
      )
    ] })
  ] });
}, si = (e) => e === "zh" ? `# 我开始了

- 让我看看是谁搞出了这个 bug 🕵️ ♂️ 🔍
  - 😯 💣
    - 原来是我 👈 🎯 💘

- 竟然不可以运行，为什么呢 🚫 ⚙️ ❓
  - 竟然可以运行了，为什么呢？🎢 ✨
    - 🤯 ⚡ ➡️ 🎉

- 能运行起来的 🐞 🚀
  - 就不要去动它 🛑 ✋
    - 👾 💥 🏹 🎯
    
## 男孩还是女孩 👶 ❓ 🤷 ♂️ ♀️

### Hello world 👋 🌍 ✨ 💻

#### 哇 是个程序员 🤯 ⌨️ 💡 👩 💻` : `# I have started

- Let me see who made this bug 🕵️ ♂️ 🔍
  - 😯 💣
    - Turns out it was me 👈 🎯 💘

- Unexpectedly, it cannot run; why is that 🚫 ⚙️ ❓
  - Unexpectedly, it can run now; why is that? 🎢 ✨
    - 🤯 ⚡ ➡️ 🎉

- What can run 🐞 🚀
  - then do not touch it 🛑 ✋
    - 👾 💥 🏹 🎯
    
## Boy or girl 👶 ❓ 🤷 ♂️ ♀️

### Hello world 👋 🌍 ✨ 💻

#### Wow, a programmer 🤯 ⌨️ 💡 👩 💻`, j1 = () => {
  const { appState: e, setAppState: t } = Ce(), { t: n, language: r } = ne(), [i, o] = F({
    loaded: !1,
    api: Promise.resolve({
      parseMarkdownToDrawnix: (w, C) => null
    })
  });
  ie(() => {
    (async () => {
      try {
        const C = await import("./index-BSDAn69z.mjs");
        o({
          loaded: !0,
          api: Promise.resolve(C)
        });
      } catch (C) {
        console.error("Failed to load mermaid library:", C), f(new Error(n("dialog.error.loadMermaid")));
      }
    })();
  }, []);
  const [s, l] = F(() => si(r)), [c, u] = F(() => []), d = Ci(s.trim()), [h, f] = F(null), m = ee();
  ie(() => {
    l(si(r));
  }, [r]), ie(() => {
    (async () => {
      try {
        const C = await i.api;
        let g;
        try {
          g = await C.parseMarkdownToDrawnix(d);
        } catch {
          g = await C.parseMarkdownToDrawnix(
            d.replace(/"/g, "'")
          );
        }
        const b = g;
        b.points = [[0, 0]], b && (u([b]), f(null));
      } catch (C) {
        f(C);
      }
    })();
  }, [d, i]);
  const p = () => {
    if (!c.length)
      return;
    const w = _.getBoardContainer(m).getBoundingClientRect(), C = [
      w.width / 4,
      w.height / 2 - 20
    ], g = m.viewport.zoom, b = vi(m), y = b[0] + C[0] / g, x = b[1] + C[1] / g, E = c;
    m.insertFragment(
      {
        elements: JSON.parse(JSON.stringify(E))
      },
      [y, x],
      wi.paste
    ), t({ ...e, openDialogType: null });
  };
  return /* @__PURE__ */ k(ke, { children: [
    /* @__PURE__ */ a("div", { className: "ttd-dialog-desc", children: n("dialog.markdown.description") }),
    /* @__PURE__ */ k(Ho, { children: [
      /* @__PURE__ */ a(jt, { label: n("dialog.markdown.syntax"), children: /* @__PURE__ */ a(
        Uo,
        {
          input: s,
          placeholder: n("dialog.markdown.placeholder"),
          onChange: (w) => l(w.target.value),
          onKeyboardSubmit: () => {
            p();
          }
        }
      ) }),
      /* @__PURE__ */ a(
        jt,
        {
          label: n("dialog.markdown.preview"),
          panelAction: {
            action: () => {
              p();
            },
            label: n("dialog.markdown.insert")
          },
          renderSubmitShortcut: () => /* @__PURE__ */ a(qo, {}),
          children: /* @__PURE__ */ a(
            Wo,
            {
              value: c,
              loaded: i.loaded,
              error: h
            }
          )
        }
      )
    ] })
  ] });
}, H1 = ({ container: e }) => {
  const { appState: t, setAppState: n } = Ce();
  return /* @__PURE__ */ k(ke, { children: [
    /* @__PURE__ */ a(
      _n,
      {
        open: t.openDialogType === He.mermaidToDrawnix,
        onOpenChange: (r) => {
          n({
            ...t,
            openDialogType: r ? He.mermaidToDrawnix : null
          });
        },
        children: /* @__PURE__ */ a(Fn, { className: "Dialog ttd-dialog", container: e, children: /* @__PURE__ */ a(z1, {}) })
      }
    ),
    /* @__PURE__ */ a(
      _n,
      {
        open: t.openDialogType === He.markdownToDrawnix,
        onOpenChange: (r) => {
          n({
            ...t,
            openDialogType: r ? He.markdownToDrawnix : null
          });
        },
        children: /* @__PURE__ */ a(Fn, { className: "Dialog ttd-dialog", container: e, children: /* @__PURE__ */ a(j1, {}) })
      }
    )
  ] });
}, U1 = ({
  container: e
}) => {
  const { appState: t, setAppState: n } = Ce(), { t: r } = ne(), i = ee();
  return /* @__PURE__ */ a(
    _n,
    {
      open: t.openCleanConfirm,
      onOpenChange: (o) => {
        n({ ...t, openCleanConfirm: o });
      },
      children: /* @__PURE__ */ k(Fn, { className: "clean-confirm", container: e, children: [
        /* @__PURE__ */ a("h2", { className: "clean-confirm__title", children: r("cleanConfirm.title") }),
        /* @__PURE__ */ a("p", { className: "clean-confirm__description", children: r("cleanConfirm.description") }),
        /* @__PURE__ */ k("div", { className: "clean-confirm__actions", children: [
          /* @__PURE__ */ a(
            "button",
            {
              className: "clean-confirm__button clean-confirm__button--cancel",
              onClick: () => {
                n({ ...t, openCleanConfirm: !1 });
              },
              children: r("cleanConfirm.cancel")
            }
          ),
          /* @__PURE__ */ a(
            "button",
            {
              className: "clean-confirm__button clean-confirm__button--ok",
              autoFocus: !0,
              onClick: () => {
                i.deleteFragment(i.children), n({ ...t, openCleanConfirm: !1 });
              },
              children: r("cleanConfirm.ok")
            }
          )
        ] })
      ] })
    }
  );
}, li = (e) => {
  const { appState: t } = e;
  return t && t.linkState && t.linkState.isHovering;
}, ci = (e) => {
  const { appState: t } = e;
  return t && t.linkState && t.linkState.isEditing;
}, W1 = (e) => (n) => {
  const { pointerMove: r } = n;
  let i = null, o = null;
  return n.pointerMove = (s) => {
    (_.isPointer(n, ye.selection) || _.isPointer(n, ye.hand)) && !bn(n) && !ki(n) && !li(n) && !ci(n) && pi(n, "with-text-link", () => {
      const l = s.target.closest(
        ".plait-board-link"
      );
      if (l && l !== i) {
        const c = l.closest(
          ".plait-text-container"
        ), u = et.toSlateNode(
          void 0,
          c
        ), d = et.toSlateNode(
          void 0,
          l
        );
        i = l, e({
          linkState: {
            targetDom: l,
            targetElement: d,
            editor: u,
            isEditing: !1,
            isHovering: !1,
            isHoveringOrigin: !0
          }
        }), clearTimeout(o);
      } else
        !l && i && (o = setTimeout(() => {
          !li(n) && !ci(n) && e({
            linkState: null
          });
        }, 300), i = null);
    }), r(s);
  }, n;
}, q1 = () => {
  var w, C, g, b;
  const [e, t] = F(""), { appState: n, setAppState: r } = Ce(), i = ee(), { refs: o, floatingStyles: s } = Wt({
    placement: "top",
    middleware: [An(20), Bn()]
  }), l = n.linkState, c = ((w = n.linkState) == null ? void 0 : w.targetDom) || null, u = ((C = n.linkState) == null ? void 0 : C.isEditing) || !1, d = ((g = n.linkState) == null ? void 0 : g.isHoveringOrigin) || !1, h = ((b = n.linkState) == null ? void 0 : b.isHovering) || !1, f = u || d || h, m = xe(n.linkState);
  ie(() => {
    m.current = n.linkState, n.linkState ? t(n.linkState.targetElement.url) : t("");
  }, [n.linkState]), ie(() => {
    if (c) {
      const y = c.getBoundingClientRect();
      o.setPositionReference({
        getBoundingClientRect() {
          return {
            x: y.x,
            y: y.y,
            width: y.width,
            height: y.height,
            top: y.y,
            left: y.x,
            right: y.x + y.width,
            bottom: y.y + y.height
          };
        }
      });
    }
  }, [i.viewport, c]), ie(() => {
    const y = (x) => {
      if (o.floating.current && !o.floating.current.contains(x.target)) {
        if (m.current) {
          const E = Je.getLinkElement(
            m.current.editor
          );
          E && !E[0].url.trim() && Je.unwrapLink(m.current.editor);
        }
        r({
          ...n,
          linkState: null
        });
      }
    };
    return document.addEventListener("mousedown", y), () => {
      document.removeEventListener("mousedown", y);
    };
  }, []);
  const p = () => {
    if (e !== l.targetElement.url) {
      const x = l.editor, E = l.targetElement, M = et.findPath(x, E);
      qe.setNodes(x, { url: e }, { at: M });
    }
    const y = Je.getLinkElement(l.editor);
    r({
      ...n,
      linkState: {
        ...n.linkState,
        targetElement: y[0],
        isEditing: !1,
        isHoveringOrigin: !0
      }
    });
  };
  return f && /* @__PURE__ */ a(
    pe,
    {
      ref: o.setFloating,
      style: s,
      padding: 1,
      className: T("link-popup"),
      onPointerEnter: () => {
        h || r({
          ...n,
          linkState: {
            ...n.linkState,
            isHovering: !0
          }
        });
      },
      onPointerLeave: () => {
        u || r({
          ...n,
          linkState: {
            ...n.linkState,
            isHovering: !1
          }
        });
      },
      children: /* @__PURE__ */ a(oe.Row, { gap: 1, align: "center", children: u ? /* @__PURE__ */ k(ke, { children: [
        /* @__PURE__ */ a(
          "input",
          {
            type: "text",
            value: e,
            onChange: (y) => {
              t(y.target.value);
            },
            onKeyDown: (y) => {
              y.key === "Enter" && p();
            },
            className: "link-popup__input",
            autoFocus: !0
          }
        ),
        /* @__PURE__ */ a(
          R,
          {
            type: "icon",
            visible: !0,
            icon: Rt,
            title: "Delete link",
            "aria-label": "Delete link",
            onPointerDown: () => {
              const y = l.editor, x = l.targetElement, E = et.findPath(y, x);
              qe.unwrapNodes(y, {
                at: E
              }), r({
                ...n,
                linkState: null
              });
            }
          }
        )
      ] }) : /* @__PURE__ */ k(ke, { children: [
        /* @__PURE__ */ a(
          "a",
          {
            href: e,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "link-popup__link",
            children: e
          }
        ),
        /* @__PURE__ */ a(
          R,
          {
            className: "link-popup__edit",
            type: "icon",
            visible: !0,
            icon: Kn,
            title: "Edit link",
            "aria-label": "Edit link",
            onPointerDown: ({ event: y }) => {
              y.preventDefault(), r({
                ...n,
                linkState: {
                  ...n.linkState,
                  isEditing: !0
                }
              });
            }
          }
        ),
        /* @__PURE__ */ a(
          R,
          {
            type: "icon",
            visible: !0,
            icon: Rt,
            title: "Delete link",
            "aria-label": "Delete link",
            onPointerDown: () => {
              const y = l.editor, x = l.targetElement, E = et.findPath(y, x);
              qe.unwrapNodes(y, {
                at: E
              }), r({
                ...n,
                linkState: null
              });
            }
          }
        )
      ] }) })
    }
  );
}, su = ({
  value: e,
  viewport: t,
  theme: n,
  onChange: r,
  onSelectionChange: i,
  onViewportChange: o,
  onThemeChange: s,
  onValueChange: l,
  afterInit: c
}) => {
  const u = {
    readonly: !1,
    hideScrollbar: !1,
    disabledScrollOnNonFocus: !1,
    themeColors: Ti
  }, [d, h] = F(() => {
    const g = new Na(window.navigator.userAgent);
    return {
      pointer: ye.hand,
      isMobile: g.mobile() !== null,
      isPencilMode: !1,
      openDialogType: null,
      openCleanConfirm: !1
    };
  }), [f, m] = F(null);
  f && (f.appState = d);
  const p = (g) => {
    h({
      ...d,
      ...g
    });
  }, w = [
    Li,
    Ei,
    Di,
    Wa,
    Wi,
    w1(p),
    _1,
    I1(p),
    W1(p)
  ], C = xe(null);
  return /* @__PURE__ */ a(vl, { children: /* @__PURE__ */ a(Ji.Provider, { value: { appState: d, setAppState: h }, children: /* @__PURE__ */ a(
    "div",
    {
      className: T("drawnix", {
        "drawnix--mobile": d.isMobile
      }),
      ref: C,
      children: /* @__PURE__ */ k(
        ui,
        {
          value: e,
          viewport: t,
          theme: n,
          options: u,
          plugins: w,
          onChange: (g) => {
            r && r(g);
          },
          onSelectionChange: i,
          onViewportChange: o,
          onThemeChange: s,
          onValueChange: l,
          children: [
            /* @__PURE__ */ a(
              di,
              {
                afterInit: (g) => {
                  m(g), c && c(g);
                }
              }
            ),
            /* @__PURE__ */ a(v1, {}),
            /* @__PURE__ */ a(Dl, {}),
            /* @__PURE__ */ a(Tl, {}),
            /* @__PURE__ */ a(F1, {}),
            /* @__PURE__ */ a(u1, {}),
            /* @__PURE__ */ a(q1, {}),
            /* @__PURE__ */ a(R1, {}),
            /* @__PURE__ */ a(H1, { container: C.current }),
            /* @__PURE__ */ a(U1, { container: C.current })
          ]
        }
      )
    }
  ) }) });
};
export {
  su as D,
  vl as I,
  at as a,
  ou as b,
  so as c,
  lo as d,
  xt as e,
  Qe as f,
  iu as g,
  st as h,
  Il as i,
  Rl as j,
  Ss as k,
  Ps as l,
  Ls as m,
  Ms as n,
  Ds as o,
  hr as p,
  Ft as q,
  Ze as r,
  qn as s,
  io as t,
  co as u,
  uo as v,
  fo as w,
  au as x,
  ne as y
};
