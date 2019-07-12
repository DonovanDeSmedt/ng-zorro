/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { NzTreeNode } from './nz-tree-node';
import { isCheckDisabled } from './nz-tree-util';
import { NzTreeService } from './nz-tree.service';
var NzTreeNodeComponent = /** @class */ (function () {
    function NzTreeNodeComponent(nzTreeService, ngZone, renderer, elRef) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.nzHideUnMatched = false;
        // Output
        this.clickNode = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.contextMenu = new EventEmitter();
        this.clickCheckBox = new EventEmitter();
        this.clickExpand = new EventEmitter();
        this.nzDragStart = new EventEmitter();
        this.nzDragEnter = new EventEmitter();
        this.nzDragOver = new EventEmitter();
        this.nzDragLeave = new EventEmitter();
        this.nzDrop = new EventEmitter();
        this.nzDragEnd = new EventEmitter();
        // default var
        this.prefixCls = 'ant-tree';
        this.highlightKeys = [];
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        this.nzNodeChildrenClass = {};
        /**
         * drag var
         */
        this.destory$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        this._searchValue = '';
        this._nzExpandAll = false;
        this._nzDraggable = false;
        this.oldAPIIcon = true;
    }
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzTreeNode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzTreeNode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // add to checked list & selected list
            if (value.isChecked) {
                this.nzTreeService.setCheckedNodeList(value);
            }
            // add select list
            if (value.isSelected) {
                this.nzTreeService.setSelectedNodeList(value, this.nzMultiple);
            }
            if (!value.isLeaf) {
                this.nzTreeService.setExpandedNodeList(value);
            }
            this._nzTreeNode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzDraggable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzDraggable = value;
            this.handDragEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzDefaultExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzExpandAll;
        },
        /**
         * @deprecated use
         * nzExpandAll instead
         */
        set: /**
         * @deprecated use
         * nzExpandAll instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzExpandAll = value;
            if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.setExpanded(true);
                this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzExpandAll;
        },
        // default set
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzExpandAll = value;
            if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.setExpanded(true);
                this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzSearchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.highlightKeys = [];
            if (value && this.nzTreeNode.title.includes(value)) {
                /** @type {?} */
                var index = this.nzTreeNode.title.indexOf(value);
                this.highlightKeys.push(this.nzTreeNode.title.slice(0, index));
                this.highlightKeys.push(this.nzTreeNode.title.slice(index + value.length, this.nzTreeNode.title.length));
            }
            this._searchValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzTreeNode && this.nzTreeNode.origin.icon) {
                this.oldAPIIcon = this.nzTreeNode.origin.icon.indexOf('anticon') > -1;
            }
            return this.nzTreeNode && this.nzTreeNode.origin.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "canDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzDraggable && this.nzTreeNode && !this.nzTreeNode.isDisabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isShowLineIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzTreeNode.isLeaf && this.nzShowLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isShowSwitchIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzTreeNode.isLeaf && !this.nzShowLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherClose", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            // TODO
            return (this.nzSearchValue && this.nzHideUnMatched && !this.nzTreeNode.isMatched && !this.nzTreeNode.isExpanded) ? 'none' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * reset node class
     */
    /**
     * reset node class
     * @return {?}
     */
    NzTreeNodeComponent.prototype.setClassMap = /**
     * reset node class
     * @return {?}
     */
    function () {
        var _a, _b, _c, _d, _e, _f;
        this.nzNodeClass = (_a = {},
            _a[this.prefixCls + "-treenode-disabled"] = this.nzTreeNode.isDisabled,
            _a);
        this.nzNodeSwitcherClass = (_b = {},
            _b[this.prefixCls + "-switcher"] = true,
            _b[this.prefixCls + "-switcher-noop"] = this.nzTreeNode.isLeaf,
            _b);
        this.nzNodeContentClass = (_c = {},
            _c[this.prefixCls + "-node-content-wrapper"] = true,
            _c);
        this.nzNodeContentIconClass = (_d = {},
            _d[this.prefixCls + "-iconEle"] = true,
            _d[this.prefixCls + "-icon__customize"] = true,
            _d);
        this.nzNodeContentLoadingClass = (_e = {},
            _e[this.prefixCls + "-iconEle"] = true,
            _e);
        this.nzNodeChildrenClass = (_f = {},
            _f[this.prefixCls + "-child-tree"] = true,
            _f[this.prefixCls + "-child-tree-open"] = true,
            _f);
    };
    /**
     * click node to select, 200ms to dbl click
     */
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzClick = /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeNode.isSelectable) {
            this.nzTreeService.setNodeActive(this.nzTreeNode, this.nzMultiple);
        }
        this.clickNode.emit(this.nzTreeService.formatEvent('click', this.nzTreeNode, event));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.dblClick.emit(this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event));
    };
    /**
     * @param event
     */
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.contextMenu.emit(this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event));
    };
    /**
     * collapse node
     * @param event
     */
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype._clickExpand = /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.nzTreeNode.isLoading && !this.nzTreeNode.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.getChildren().length === 0 && !this.nzTreeNode.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.setExpanded(!this.nzTreeNode.isExpanded);
            this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
            this.clickExpand.emit(this.nzTreeService.formatEvent('expand', this.nzTreeNode, event));
        }
    };
    /**
     * check node
     * @param event
     */
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype._clickCheckBox = /**
     * check node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (isCheckDisabled(this.nzTreeNode)) {
            return;
        }
        this.nzTreeNode.setChecked(!this.nzTreeNode.isChecked);
        this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        if (!this.nzCheckStrictly) {
            this.nzTreeService.conduct(this.nzTreeNode);
        }
        this.clickCheckBox.emit(this.nzTreeService.formatEvent('check', this.nzTreeNode, event));
    };
    /**
     * drag event
     * @param e
     */
    /**
     * drag event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.clearDragClass = /**
     * drag event
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(function (e) {
            _this.renderer.removeClass(_this.dragElement.nativeElement, e);
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', '');
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        this.nzTreeNode.setExpanded(false);
        this.nzDragStart.emit(this.nzTreeService.formatEvent('dragstart', null, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(function () {
            if ((_this.nzTreeNode !== _this.nzTreeService.getSelectedNode()) && !_this.nzTreeNode.isLeaf) {
                _this.nzTreeNode.setExpanded(true);
            }
        });
        this.nzDragEnter.emit(this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        this.nzDragOver.emit(this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run(function () {
            _this.clearDragClass();
        });
        this.nzDragLeave.emit(this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(function () {
            _this.clearDragClass();
            if (_this.nzTreeService.getSelectedNode() === _this.nzTreeNode) {
                return;
            }
            else if (_this.dragPos === 0 && _this.nzTreeNode.isLeaf) {
                return;
            }
            // pass if node is leafNo
            if (_this.nzBeforeDrop) {
                _this.nzBeforeDrop({
                    dragNode: _this.nzTreeService.getSelectedNode(),
                    node: _this.nzTreeNode,
                    pos: _this.dragPos
                }).subscribe(function (canDrop) {
                    if (canDrop) {
                        _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                    }
                    _this.nzDrop.emit(_this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e));
                    _this.nzDragEnd.emit(_this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e));
                });
            }
            else if (_this.nzTreeNode) {
                _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                _this.nzDrop.emit(_this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e));
            }
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run(function () {
            // if user do not custom beforeDrop
            if (!_this.nzBeforeDrop) {
                _this.nzTreeService.setSelectedNode(null);
                _this.nzDragEnd.emit(_this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e));
            }
        });
    };
    /**
     * 监听拖拽事件
     */
    /**
     * 监听拖拽事件
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handDragEvent = /**
     * 监听拖拽事件
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.nzDraggable) {
                _this.destory$ = new Subject();
                fromEvent(_this.elRef.nativeElement, 'dragstart').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragStart(e); });
                fromEvent(_this.elRef.nativeElement, 'dragenter').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragEnter(e); });
                fromEvent(_this.elRef.nativeElement, 'dragover').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragOver(e); });
                fromEvent(_this.elRef.nativeElement, 'dragleave').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragLeave(e); });
                fromEvent(_this.elRef.nativeElement, 'drop').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragDrop(e); });
                fromEvent(_this.elRef.nativeElement, 'dragend').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragEnd(e); });
            }
            else {
                _this.destory$.next();
                _this.destory$.complete();
            }
        });
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destory$.next();
        this.destory$.complete();
    };
    NzTreeNodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree-node',
                    template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"nzNodeClass\"\r\n  [class.ant-tree-treenode-switcher-open]=\"isSwitcherOpen\"\r\n  [class.ant-tree-treenode-switcher-close]=\"isSwitcherClose\"\r\n  [class.ant-tree-treenode-checkbox-checked]=\"nzTreeNode.isChecked\"\r\n  [class.ant-tree-treenode-checkbox-indeterminate]=\"nzTreeNode.isHalfChecked\"\r\n  [class.ant-tree-treenode-selected]=\"nzTreeNode.isSelected\"\r\n  [class.ant-tree-treenode-loading]=\"nzTreeNode.isLoading\">\r\n  <ng-container *ngIf=\"nzShowExpand\">\r\n    <span\r\n      [ngClass]=\"nzNodeSwitcherClass\"\r\n      [class.ant-tree-switcher_open]=\"isSwitcherOpen\"\r\n      [class.ant-tree-switcher_close]=\"isSwitcherClose\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <i *ngIf=\"!nzTreeNode.isLoading\" nz-icon type=\"caret-down\" class=\"ant-tree-switcher-icon\"></i>\r\n        <i *ngIf=\"nzTreeNode.isLoading\" nz-icon type=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"nzShowLine\">\r\n        <i *ngIf=\"isShowLineIcon\" nz-icon [type]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        <i *ngIf=\"!isShowLineIcon\" nz-icon type=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n      </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"nzCheckable\">\r\n    <span\r\n      class=\"ant-tree-checkbox\"\r\n      [class.ant-tree-checkbox-checked]=\"nzTreeNode.isChecked\"\r\n      [class.ant-tree-checkbox-indeterminate]=\"nzTreeNode.isHalfChecked\"\r\n      [class.ant-tree-checkbox-disabled]=\"(nzTreeNode.isDisabled || nzTreeNode.isDisableCheckbox)\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span class=\"ant-tree-checkbox-inner\"></span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!nzTreeTemplate\">\r\n    <span\r\n      title=\"{{nzTreeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"nzNodeContentClass\"\r\n      [class.ant-tree-node-content-wrapper-open]=\"isSwitcherOpen\"\r\n      [class.ant-tree-node-content-wrapper-close]=\"isSwitcherClose\"\r\n      [class.ant-tree-node-selected]=\"nzTreeNode.isSelected\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"nzTreeNode.origin.icon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"nzTreeNode.isLoading\"\r\n        [ngClass]=\"nzNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"nzNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"nzIcon\" [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\">\r\n        <ng-container *ngIf=\"nzTreeNode.isMatched\">\r\n          <span>\r\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{nzSearchValue}}</span>{{highlightKeys[1]}}\r\n          </span>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!nzTreeNode.isMatched\">\r\n          {{nzTreeNode.title}}\r\n        </ng-container>\r\n      </span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"nzTreeTemplate\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\r\n  </ng-template>\r\n\r\n  <ul\r\n    role=\"group\"\r\n    [attr.data-expanded]=\"nzTreeNode.isExpanded\"\r\n    [ngClass]=\"nzNodeChildrenClass\"\r\n    [@nodeState]=\"nzTreeNode.isExpanded ? 'active' : 'inactive'\">\r\n    <nz-tree-node\r\n      *ngFor=\"let node of nzTreeNode.getChildren()\"\r\n      [nzTreeNode]=\"node\"\r\n      [nzShowLine]=\"nzShowLine\"\r\n      [nzDraggable]=\"nzDraggable\"\r\n      [nzCheckable]=\"nzCheckable\"\r\n      [nzShowExpand]=\"nzShowExpand\"\r\n      [nzAsyncData]=\"nzAsyncData\"\r\n      [nzMultiple]=\"nzMultiple\"\r\n      [nzExpandAll]=\"nzExpandAll\"\r\n      [nzDefaultExpandAll]=\"nzDefaultExpandAll\"\r\n      [nzSearchValue]=\"nzSearchValue\"\r\n      [nzHideUnMatched]=\"nzHideUnMatched\"\r\n      [nzBeforeDrop]=\"nzBeforeDrop\"\r\n      [nzCheckStrictly]=\"nzCheckStrictly\"\r\n      [nzTreeTemplate]=\"nzTreeTemplate\"\r\n      (clickNode)=\"clickNode.emit($event)\"\r\n      (dblClick)=\"dblClick.emit($event)\"\r\n      (contextMenu)=\"contextMenu.emit($event)\"\r\n      (clickExpand)=\"clickExpand.emit($event)\"\r\n      (clickCheckBox)=\"clickCheckBox.emit($event)\"\r\n      (nzDragStart)=\"nzDragStart.emit($event)\"\r\n      (nzDragEnter)=\"nzDragEnter.emit($event)\"\r\n      (nzDragOver)=\"nzDragOver.emit($event)\"\r\n      (nzDragLeave)=\"nzDragLeave.emit($event)\"\r\n      (nzDrop)=\"nzDrop.emit($event)\"\r\n      (nzDragEnd)=\"nzDragEnd.emit($event)\">\r\n    </nz-tree-node>\r\n  </ul>\r\n</li>",
                    preserveWhitespaces: false,
                    animations: [
                        trigger('nodeState', [
                            state('inactive', style({
                                opacity: '0',
                                height: '0',
                                display: 'none'
                            })),
                            state('active', style({
                                opacity: '1',
                                height: '*'
                            })),
                            transition('inactive => active', animate('100ms ease-in')),
                            transition('active => inactive', animate('100ms ease-out'))
                        ])
                    ]
                }] }
    ];
    /** @nocollapse */
    NzTreeNodeComponent.ctorParameters = function () { return [
        { type: NzTreeService },
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzTreeNodeComponent.propDecorators = {
        dragElement: [{ type: ViewChild, args: ['dragElement',] }],
        nzShowLine: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzHideUnMatched: [{ type: Input }],
        nzTreeTemplate: [{ type: Input }],
        nzBeforeDrop: [{ type: Input }],
        nzTreeNode: [{ type: Input }],
        nzDraggable: [{ type: Input }],
        nzDefaultExpandAll: [{ type: Input }],
        nzExpandAll: [{ type: Input }],
        nzSearchValue: [{ type: Input }],
        clickNode: [{ type: Output }],
        dblClick: [{ type: Output }],
        contextMenu: [{ type: Output }],
        clickCheckBox: [{ type: Output }],
        clickExpand: [{ type: Output }],
        nzDragStart: [{ type: Output }],
        nzDragEnter: [{ type: Output }],
        nzDragOver: [{ type: Output }],
        nzDragLeave: [{ type: Output }],
        nzDrop: [{ type: Output }],
        nzDragEnd: [{ type: Output }],
        nzClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        nzDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
        nzContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzCheckStrictly", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
    return NzTreeNodeComponent;
}());
export { NzTreeNodeComponent };
function NzTreeNodeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragElement;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.clickNode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dblClick;
    /** @type {?} */
    NzTreeNodeComponent.prototype.contextMenu;
    /** @type {?} */
    NzTreeNodeComponent.prototype.clickCheckBox;
    /** @type {?} */
    NzTreeNodeComponent.prototype.clickExpand;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragStart;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragEnter;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragOver;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragLeave;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragEnd;
    /** @type {?} */
    NzTreeNodeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeNodeComponent.prototype.highlightKeys;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeSwitcherClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentIconClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentLoadingClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeChildrenClass;
    /**
     * drag var
     * @type {?}
     */
    NzTreeNodeComponent.prototype.destory$;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPosClass;
    /**
     * default set
     * @type {?}
     */
    NzTreeNodeComponent.prototype._nzTreeNode;
    /** @type {?} */
    NzTreeNodeComponent.prototype._searchValue;
    /** @type {?} */
    NzTreeNodeComponent.prototype._nzExpandAll;
    /** @type {?} */
    NzTreeNodeComponent.prototype._nzDraggable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeService;
    /** @type {?} */
    NzTreeNodeComponent.prototype.ngZone;
    /** @type {?} */
    NzTreeNodeComponent.prototype.renderer;
    /** @type {?} */
    NzTreeNodeComponent.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFvWmhELDZCQUFvQixhQUE0QixFQUFVLE1BQWMsRUFBVSxRQUFtQixFQUFVLEtBQWlCO1FBQTVHLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBcFhoSSx1QkFBMkMsS0FBSyxDQUFDOztRQWtGakQsaUJBQWdFLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkYsZ0JBQStELElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEYsbUJBQWtFLElBQUks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ZCxZQUFZLEVBQUU7Ozs4QkF2RDFCOztTQThDYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xyXG5pbXBvcnQgeyBOekZvcm1hdEJlZm9yZURyb3BFdmVudCwgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi90cmVlL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtbm9kZSc7XHJcbmltcG9ydCB7IGlzQ2hlY2tEaXNhYmxlZCB9IGZyb20gJy4vbnotdHJlZS11dGlsJztcclxuaW1wb3J0IHsgTnpUcmVlU2VydmljZSB9IGZyb20gJy4vbnotdHJlZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10cmVlLW5vZGUnLFxyXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xyXG4gICAgdHJpZ2dlcignbm9kZVN0YXRlJywgW1xyXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogJzAnLFxyXG4gICAgICAgIGhlaWdodCA6ICcwJyxcclxuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgICAgfSkpLFxyXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xyXG4gICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICBoZWlnaHQgOiAnKidcclxuICAgICAgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdpbmFjdGl2ZSA9PiBhY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLWluJykpLFxyXG4gICAgICB0cmFuc2l0aW9uKCdhY3RpdmUgPT4gaW5hY3RpdmUnLCBhbmltYXRlKCcxMDBtcyBlYXNlLW91dCcpKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTnpUcmVlTm9kZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ2RyYWdFbGVtZW50JykgZHJhZ0VsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dMaW5lOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hlY2thYmxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFzeW5jRGF0YTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5OiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhpZGVVbk1hdGNoZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuelRyZWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56VHJlZU5vZGUodmFsdWU6IE56VHJlZU5vZGUpIHtcclxuICAgIC8vIGFkZCB0byBjaGVja2VkIGxpc3QgJiBzZWxlY3RlZCBsaXN0XHJcbiAgICBpZiAodmFsdWUuaXNDaGVja2VkKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gYWRkIHNlbGVjdCBsaXN0XHJcbiAgICBpZiAodmFsdWUuaXNTZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlTGlzdCh2YWx1ZSwgdGhpcy5uek11bHRpcGxlKTtcclxuICAgIH1cclxuICAgIGlmICghdmFsdWUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuX256VHJlZU5vZGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuelRyZWVOb2RlKCk6IE56VHJlZU5vZGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX256VHJlZU5vZGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRyYWdnYWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbnpEcmFnZ2FibGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaGFuZERyYWdFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56RHJhZ2dhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX256RHJhZ2dhYmxlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlXHJcbiAgICogbnpFeHBhbmRBbGwgaW5zdGVhZFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGVmYXVsdEV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbnpFeHBhbmRBbGwgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSAmJiB0aGlzLm56VHJlZU5vZGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgdGhpcy5uelRyZWVOb2RlLnNldEV4cGFuZGVkKHRydWUpO1xyXG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLm56VHJlZU5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGVmYXVsdEV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9uekV4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIC8vIGRlZmF1bHQgc2V0XHJcbiAgQElucHV0KClcclxuICBzZXQgbnpFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX256RXhwYW5kQWxsID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5uelRyZWVOb2RlICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlTm9kZS5zZXRFeHBhbmRlZCh0cnVlKTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekV4cGFuZEFsbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9uekV4cGFuZEFsbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5oaWdobGlnaHRLZXlzID0gW107XHJcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5uelRyZWVOb2RlLnRpdGxlLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAvLyBtYXRjaCB0aGUgc2VhcmNoIHZhbHVlXHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5uelRyZWVOb2RlLnRpdGxlLmluZGV4T2YodmFsdWUpO1xyXG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMucHVzaCh0aGlzLm56VHJlZU5vZGUudGl0bGUuc2xpY2UoMCwgaW5kZXgpKTtcclxuICAgICAgdGhpcy5oaWdobGlnaHRLZXlzLnB1c2godGhpcy5uelRyZWVOb2RlLnRpdGxlLnNsaWNlKGluZGV4ICsgdmFsdWUubGVuZ3RoLCB0aGlzLm56VHJlZU5vZGUudGl0bGUubGVuZ3RoKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIE91dHB1dFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja05vZGU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRibENsaWNrOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjb250ZXh0TWVudTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tDaGVja0JveDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tFeHBhbmQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEcmFnT3ZlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RHJvcDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEcmFnRW5kOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBkZWZhdWx0IHZhclxyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XHJcbiAgaGlnaGxpZ2h0S2V5cyA9IFtdO1xyXG4gIG56Tm9kZUNsYXNzID0ge307XHJcbiAgbnpOb2RlU3dpdGNoZXJDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRDbGFzcyA9IHt9O1xyXG4gIG56Tm9kZUNvbnRlbnRJY29uQ2xhc3MgPSB7fTtcclxuICBuek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge307XHJcbiAgbnpOb2RlQ2hpbGRyZW5DbGFzcyA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBkcmFnIHZhclxyXG4gICAqL1xyXG4gIGRlc3RvcnkkID0gbmV3IFN1YmplY3QoKTtcclxuICBkcmFnUG9zID0gMjtcclxuICBkcmFnUG9zQ2xhc3M6IG9iamVjdCA9IHtcclxuICAgICcwJyA6ICdkcmFnLW92ZXInLFxyXG4gICAgJzEnIDogJ2RyYWctb3Zlci1nYXAtYm90dG9tJyxcclxuICAgICctMSc6ICdkcmFnLW92ZXItZ2FwLXRvcCdcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBkZWZhdWx0IHNldFxyXG4gICAqL1xyXG4gIF9uelRyZWVOb2RlOiBOelRyZWVOb2RlO1xyXG4gIF9zZWFyY2hWYWx1ZSA9ICcnO1xyXG4gIF9uekV4cGFuZEFsbCA9IGZhbHNlO1xyXG4gIF9uekRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIG9sZEFQSUljb24gPSB0cnVlO1xyXG5cclxuICBnZXQgbnpJY29uKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5uelRyZWVOb2RlICYmIHRoaXMubnpUcmVlTm9kZS5vcmlnaW4uaWNvbikge1xyXG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB0aGlzLm56VHJlZU5vZGUub3JpZ2luLmljb24uaW5kZXhPZignYW50aWNvbicpID4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5uelRyZWVOb2RlICYmIHRoaXMubnpUcmVlTm9kZS5vcmlnaW4uaWNvbjtcclxuICB9XHJcblxyXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xyXG4gICAgcmV0dXJuICh0aGlzLm56RHJhZ2dhYmxlICYmIHRoaXMubnpUcmVlTm9kZSAmJiAhdGhpcy5uelRyZWVOb2RlLmlzRGlzYWJsZWQpID8gdHJ1ZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTaG93TGluZUljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYgJiYgdGhpcy5uelNob3dMaW5lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd1N3aXRjaEljb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYgJiYgIXRoaXMubnpTaG93TGluZTtcclxuICB9XHJcblxyXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU3dpdGNoZXJDbG9zZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmKTtcclxuICB9XHJcblxyXG4gIGdldCBkaXNwbGF5U3R5bGUoKTogc3RyaW5nIHtcclxuICAgIC8vIFRPRE9cclxuICAgIHJldHVybiAodGhpcy5uelNlYXJjaFZhbHVlICYmIHRoaXMubnpIaWRlVW5NYXRjaGVkICYmICF0aGlzLm56VHJlZU5vZGUuaXNNYXRjaGVkICYmICF0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCkgPyAnbm9uZScgOiAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IG5vZGUgY2xhc3NcclxuICAgKi9cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpOb2RlQ2xhc3MgPSB7XHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWRpc2FibGVkYCBdOiB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZFxyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlU3dpdGNoZXJDbGFzcyA9IHtcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJgIF0gICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXItbm9vcGAgXTogdGhpcy5uelRyZWVOb2RlLmlzTGVhZlxyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlQ29udGVudENsYXNzID0ge1xyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1ub2RlLWNvbnRlbnQtd3JhcHBlcmAgXTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMubnpOb2RlQ29udGVudEljb25DbGFzcyA9IHtcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWAgXSAgICAgICAgOiB0cnVlLFxyXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uX19jdXN0b21pemVgIF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZUNvbnRlbnRMb2FkaW5nQ2xhc3MgPSB7XHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgIF06IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLm56Tm9kZUNoaWxkcmVuQ2xhc3MgPSB7XHJcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWNoaWxkLXRyZWVgIF0gICAgIDogdHJ1ZSxcclxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tY2hpbGQtdHJlZS1vcGVuYCBdOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2xpY2sgbm9kZSB0byBzZWxlY3QsIDIwMG1zIHRvIGRibCBjbGlja1xyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxyXG4gIG56Q2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGlmICh0aGlzLm56VHJlZU5vZGUuaXNTZWxlY3RhYmxlKSB7XHJcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMubnpUcmVlTm9kZSwgdGhpcy5uek11bHRpcGxlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xpY2tOb2RlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjbGljaycsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RibGNsaWNrJywgWyAnJGV2ZW50JyBdKVxyXG4gIG56RGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuZGJsQ2xpY2suZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbICckZXZlbnQnIF0pXHJcbiAgbnpDb250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5jb250ZXh0TWVudS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY29udGV4dG1lbnUnLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjb2xsYXBzZSBub2RlXHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICovXHJcbiAgX2NsaWNrRXhwYW5kKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoIXRoaXMubnpUcmVlTm9kZS5pc0xvYWRpbmcgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgLy8gc2V0IGFzeW5jIHN0YXRlXHJcbiAgICAgIGlmICh0aGlzLm56QXN5bmNEYXRhICYmIHRoaXMubnpUcmVlTm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQpIHtcclxuICAgICAgICB0aGlzLm56VHJlZU5vZGUuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm56VHJlZU5vZGUuc2V0RXhwYW5kZWQoIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkKTtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldEV4cGFuZGVkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcclxuICAgICAgdGhpcy5jbGlja0V4cGFuZC5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXhwYW5kJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2hlY2sgbm9kZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIF9jbGlja0NoZWNrQm94KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvLyByZXR1cm4gaWYgbm9kZSBpcyBkaXNhYmxlZFxyXG4gICAgaWYgKGlzQ2hlY2tEaXNhYmxlZCh0aGlzLm56VHJlZU5vZGUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMubnpUcmVlTm9kZS5zZXRDaGVja2VkKCF0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkKTtcclxuICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodGhpcy5uelRyZWVOb2RlKTtcclxuICAgIGlmICghdGhpcy5uekNoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy5uelRyZWVOb2RlKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xpY2tDaGVja0JveC5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnY2hlY2snLCB0aGlzLm56VHJlZU5vZGUsIGV2ZW50KSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkcmFnIGV2ZW50XHJcbiAgICogQHBhcmFtIGVcclxuICAgKi9cclxuICBjbGVhckRyYWdDbGFzcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRyYWdDbGFzcyA9IFsgJ2RyYWctb3Zlci1nYXAtdG9wJywgJ2RyYWctb3Zlci1nYXAtYm90dG9tJywgJ2RyYWctb3ZlcicgXTtcclxuICAgIGRyYWdDbGFzcy5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdTdGFydChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBpZSB0aHJvdyBlcnJvclxyXG4gICAgICAvLyBmaXJlZm94LW5lZWQtaXRcclxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsICcnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGVtcHR5XHJcbiAgICB9XHJcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0U2VsZWN0ZWROb2RlKHRoaXMubnpUcmVlTm9kZSk7XHJcbiAgICB0aGlzLm56VHJlZU5vZGUuc2V0RXhwYW5kZWQoZmFsc2UpO1xyXG4gICAgdGhpcy5uekRyYWdTdGFydC5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgbnVsbCwgZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0VudGVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIC8vIHJlc2V0IHBvc2l0aW9uXHJcbiAgICB0aGlzLmRyYWdQb3MgPSAyO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgaWYgKCh0aGlzLm56VHJlZU5vZGUgIT09IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSkgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcclxuICAgICAgICB0aGlzLm56VHJlZU5vZGUuc2V0RXhwYW5kZWQodHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5uekRyYWdFbnRlci5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2VudGVyJywgdGhpcy5uelRyZWVOb2RlLCBlKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnT3ZlcihlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBkcm9wUG9zaXRpb24gPSB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0Ryb3BQb3NpdGlvbihlKTtcclxuICAgIGlmICh0aGlzLmRyYWdQb3MgIT09IGRyb3BQb3NpdGlvbikge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICAgIHRoaXMuZHJhZ1BvcyA9IGRyb3BQb3NpdGlvbjtcclxuICAgICAgLy8gbGVhZiBub2RlIHdpbGwgcGFzc1xyXG4gICAgICBpZiAoISh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy5uelRyZWVOb2RlLmlzTGVhZikpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5kcmFnUG9zQ2xhc3NbIHRoaXMuZHJhZ1BvcyBdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uekRyYWdPdmVyLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcmFnb3ZlcicsIHRoaXMubnpUcmVlTm9kZSwgZSkpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRHJhZ0xlYXZlKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2xlYXJEcmFnQ2xhc3MoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5uekRyYWdMZWF2ZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2xlYXZlJywgdGhpcy5uelRyZWVOb2RlLCBlKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XHJcbiAgICAgIGlmICh0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCkgPT09IHRoaXMubnpUcmVlTm9kZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy5uelRyZWVOb2RlLmlzTGVhZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICAvLyBwYXNzIGlmIG5vZGUgaXMgbGVhZk5vXHJcbiAgICAgIGlmICh0aGlzLm56QmVmb3JlRHJvcCkge1xyXG4gICAgICAgIHRoaXMubnpCZWZvcmVEcm9wKHtcclxuICAgICAgICAgIGRyYWdOb2RlOiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlKCksXHJcbiAgICAgICAgICBub2RlICAgIDogdGhpcy5uelRyZWVOb2RlLFxyXG4gICAgICAgICAgcG9zICAgICA6IHRoaXMuZHJhZ1Bvc1xyXG4gICAgICAgIH0pLnN1YnNjcmliZSgoY2FuRHJvcDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgaWYgKGNhbkRyb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLm56VHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLm56RHJvcC5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJvcCcsIHRoaXMubnpUcmVlTm9kZSwgZSkpO1xyXG4gICAgICAgICAgdGhpcy5uekRyYWdFbmQuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLm56VHJlZU5vZGUsIGUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm56VHJlZU5vZGUpIHtcclxuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMubnpUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcclxuICAgICAgICB0aGlzLm56RHJvcC5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJvcCcsIHRoaXMubnpUcmVlTm9kZSwgZSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgLy8gaWYgdXNlciBkbyBub3QgY3VzdG9tIGJlZm9yZURyb3BcclxuICAgICAgaWYgKCF0aGlzLm56QmVmb3JlRHJvcCkge1xyXG4gICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRTZWxlY3RlZE5vZGUobnVsbCk7XHJcbiAgICAgICAgdGhpcy5uekRyYWdFbmQuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLm56VHJlZU5vZGUsIGUpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnm5HlkKzmi5bmi73kuovku7ZcclxuICAgKi9cclxuICBoYW5kRHJhZ0V2ZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uekRyYWdnYWJsZSkge1xyXG4gICAgICAgIHRoaXMuZGVzdG9yeSQgPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdzdGFydCcpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdG9yeSQpKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbnRlcicpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdG9yeSQpKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRW50ZXIoZSkpO1xyXG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdvdmVyJykucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0b3J5JCkpLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdPdmVyKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkkKSkuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0xlYXZlKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcm9wJykucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0b3J5JCkpLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdEcm9wKGUpKTtcclxuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW5kJykucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0b3J5JCkpLnN1YnNjcmliZSgoZTogRHJhZ0V2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWdFbmQoZSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVzdG9yeSQubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdG9yeSQuY29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG56VHJlZVNlcnZpY2U6IE56VHJlZVNlcnZpY2UsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFsgcHJvcGVydHlOYW1lOiBzdHJpbmcgXTogU2ltcGxlQ2hhbmdlIH0pOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0b3J5JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3RvcnkkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==