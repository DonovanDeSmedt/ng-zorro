/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzTreeNode } from './nz-tree-node';
import { isCheckDisabled, isInArray } from './nz-tree-util';
var NzTreeService = /** @class */ (function () {
    function NzTreeService() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.conductOption = {
            isCheckStrictly: false
        };
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
    }
    /**
     * reset tree nodes will clear default node list
     */
    /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeService.prototype.initTree = /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    function (nzNodes) {
        var _this = this;
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.expandedNodeList = [];
        this.matchedNodeList = [];
        setTimeout(function () {
            _this.refreshCheckState(_this.conductOption.isCheckStrictly);
        });
    };
    /**
     * @return {?}
     */
    NzTreeService.prototype.getSelectedNode = /**
     * @return {?}
     */
    function () {
        return this.selectedNode;
    };
    /**
     * get some list
     */
    /**
     * get some list
     * @return {?}
     */
    NzTreeService.prototype.getSelectedNodeList = /**
     * get some list
     * @return {?}
     */
    function () {
        return this.conductNodeState('select');
    };
    /**
     * return checked nodes
     */
    /**
     * return checked nodes
     * @return {?}
     */
    NzTreeService.prototype.getCheckedNodeList = /**
     * return checked nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('check');
    };
    /**
     * @return {?}
     */
    NzTreeService.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.conductNodeState('halfCheck');
    };
    /**
     * return expanded nodes
     */
    /**
     * return expanded nodes
     * @return {?}
     */
    NzTreeService.prototype.getExpandedNodeList = /**
     * return expanded nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('expand');
    };
    /**
     * return search matched nodes
     */
    /**
     * return search matched nodes
     * @return {?}
     */
    NzTreeService.prototype.getMatchedNodeList = /**
     * return search matched nodes
     * @return {?}
     */
    function () {
        return this.conductNodeState('match');
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeService.prototype.isArrayOfNzTreeNode = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.every(function (item) { return item instanceof NzTreeNode; });
    };
    /**
     * reset selectedNodeList
     */
    /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    NzTreeService.prototype.calcSelectedKeys = /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    function (selectedKeys, nzNodes, isMulti) {
        var _this = this;
        if (isMulti === void 0) { isMulti = false; }
        this.selectedNodeList = [];
        /** @type {?} */
        var calc = function (nodes) {
            nodes.forEach(function (node) {
                if (isInArray(node.key, selectedKeys)) {
                    node.setSelected(true);
                }
                else {
                    node.setSelected(false);
                }
                _this.setSelectedNodeList(node, isMulti);
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
    };
    /**
     * reset expandedNodeList
     */
    /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    NzTreeService.prototype.calcExpandedKeys = /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    function (expandedKeys, nzNodes) {
        var _this = this;
        this.expandedNodeList = [];
        /** @type {?} */
        var calc = function (nodes) {
            nodes.forEach(function (node) {
                if (isInArray(node.key, expandedKeys)) {
                    node.setExpanded(true);
                    _this.setExpandedNodeList(node);
                }
                else {
                    node.setExpanded(false);
                }
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
    };
    /**
     * reset checkedNodeList
     */
    /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeService.prototype.calcCheckedKeys = /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (checkedKeys, nzNodes, isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        var calc = function (nodes) {
            nodes.forEach(function (node) {
                if (isInArray(node.key, checkedKeys)) {
                    node.setChecked(true);
                    _this.setCheckedNodeList(node);
                }
                else {
                    node.setChecked(false);
                }
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    };
    /**
     * set drag node
     */
    /**
     * set drag node
     * @param {?=} node
     * @return {?}
     */
    NzTreeService.prototype.setSelectedNode = /**
     * set drag node
     * @param {?=} node
     * @return {?}
     */
    function (node) {
        this.selectedNode = null;
        if (node) {
            this.selectedNode = node;
        }
    };
    /**
     * set node selected status
     */
    /**
     * set node selected status
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    NzTreeService.prototype.setNodeActive = /**
     * set node selected status
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        /** @type {?} */
        var isSelected = node.isSelected;
        if (node.isDisabled) {
            return;
        }
        if (!isMultiple) {
            this.selectedNodeList.forEach(function (n) {
                n.setSelected(false);
            });
            this.selectedNodeList = [];
        }
        node.setSelected(!isSelected);
        this.setSelectedNodeList(node, isMultiple);
    };
    /**
     * add or remove node to selectedNodeList
     */
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    NzTreeService.prototype.setSelectedNodeList = /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    function (node, isMultiple) {
        if (isMultiple === void 0) { isMultiple = false; }
        /** @type {?} */
        var index = this.selectedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected && index > -1) {
            this.selectedNodeList.splice(index, 1);
        }
    };
    /**
     * merge checked nodes
     */
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.setHalfCheckedNodeList = /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.halfCheckedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList.splice(index, 1);
        }
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.setCheckedNodeList = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var index = this.checkedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList.splice(index, 1);
        }
    };
    /**
     * conduct checked/selected/expanded keys
     */
    /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    NzTreeService.prototype.conductNodeState = /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        if (type === void 0) { type = 'check'; }
        /** @type {?} */
        var resultNodesList = [];
        /** @type {?} */
        var loop = function (node) {
            switch (type) {
                case 'check':
                    if (node.isChecked) {
                        resultNodesList.push(node);
                    }
                    if (!_this.conductOption.isCheckStrictly) {
                        if (!node.isChecked) {
                            node.getChildren().forEach(function (child) {
                                loop(child);
                            });
                        }
                    }
                    else {
                        node.getChildren().forEach(function (child) {
                            loop(child);
                        });
                    }
                    break;
                case 'halfCheck':
                    if (!_this.conductOption.isCheckStrictly) {
                        if (node.isHalfChecked) {
                            resultNodesList.push(node);
                            node.getChildren().forEach(function (child) {
                                loop(child);
                            });
                        }
                    }
                    break;
                case 'select':
                    if (node.isSelected) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(function (child) {
                        loop(child);
                    });
                    break;
                case 'expand':
                    if (node.isExpanded) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(function (child) {
                        loop(child);
                    });
                    break;
                case 'match':
                    if (node.isMatched) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(function (child) {
                        loop(child);
                    });
                    break;
            }
        };
        this.rootNodes.forEach(function (node) {
            loop(node);
        });
        return resultNodesList;
    };
    /**
     * set expanded nodes
     */
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.setExpandedNodeList = /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        var index = this.expandedNodeList.findIndex(function (n) { return node.key === n.key; });
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
        }
    };
    /**
     * check state
     * @param node
     */
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    NzTreeService.prototype.refreshCheckState = /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    function (isCheckStrictly) {
        var _this = this;
        if (isCheckStrictly === void 0) { isCheckStrictly = false; }
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(function (node) {
            _this.conduct(node);
        });
    };
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.conduct = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    };
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.conductUp = /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    function (node) {
        /** @type {?} */
        var parentNode = node.getParentNode();
        // 全禁用节点不选中
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.getChildren().every(function (child) { return isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked); })) {
                    parentNode.setChecked(true);
                }
                else if (parentNode.getChildren().some(function (child) { return child.isHalfChecked || child.isChecked; })) {
                    parentNode.setChecked(false, true);
                }
                else {
                    parentNode.setChecked(false);
                }
            }
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    };
    /**
     * reset child check state
     */
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    NzTreeService.prototype.conductDown = /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    function (node, value) {
        var _this = this;
        if (!isCheckDisabled(node)) {
            node.setChecked(value);
            node.children.forEach(function (n) {
                _this.conductDown(n, value);
            });
        }
    };
    /**
     * search value & expand node
     * should add expandlist
     */
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    NzTreeService.prototype.searchExpand = /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.matchedNodeList = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        this.expandedNodeList = [];
        /** @type {?} */
        var expandParent = function (p) {
            // expand parent node
            if (p.getParentNode()) {
                p.getParentNode().setExpanded(true);
                _this.setExpandedNodeList(p.getParentNode());
                expandParent(p.getParentNode());
            }
        };
        /** @type {?} */
        var searchChild = function (n) {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                _this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
                n.setExpanded(false);
                _this.setExpandedNodeList(n);
            }
            n.children.forEach(function (g) {
                searchChild(g);
            });
        };
        this.rootNodes.forEach(function (child) {
            searchChild(child);
        });
    };
    /**
     * drag event
     */
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.refreshDragNode = /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (node.getChildren().length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach(function (child) {
                _this.refreshDragNode(child);
            });
        }
    };
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    NzTreeService.prototype.resetNodeLevel = /**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var e_1, _a;
        if (node.getParentNode()) {
            node.level = node.getParentNode().level + 1;
        }
        else {
            node.level = 0;
        }
        try {
            for (var _b = tslib_1.__values(node.getChildren()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                this.resetNodeLevel(child);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeService.prototype.calcDropPosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var clientY = event.clientY;
        var _a = event.srcElement ? event.srcElement.getBoundingClientRect() : (/** @type {?} */ (event.target)).getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
        /** @type {?} */
        var des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    };
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    NzTreeService.prototype.dropAndApply = /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    function (targetNode, dragPos) {
        var _this = this;
        if (dragPos === void 0) { dragPos = -1; }
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        var targetParent = targetNode.getParentNode();
        /** @type {?} */
        var isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.getChildren().splice(isSelectedRootNode.getChildren().indexOf(this.selectedNode), 1);
        }
        else {
            this.rootNodes.splice(this.rootNodes.indexOf(this.selectedNode), 1);
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                /** @type {?} */
                var tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    if (this.selectedNode.getParentNode()) {
                        this.resetNodeLevel(this.selectedNode.getParentNode());
                    }
                }
                else {
                    /** @type {?} */
                    var targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // 根节点插入
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach(function (child) {
            _this.refreshDragNode(child);
        });
    };
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    NzTreeService.prototype.formatEvent = /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    function (eventName, node, event) {
        /** @type {?} */
        var emitStructure = {
            'eventName': eventName,
            'node': node,
            'event': event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { 'dragNode': this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { 'selectedKeys': this.getSelectedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getSelectedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getSelectedNodeList().map(function (n) { return n.key; }) });
                break;
            case 'check':
                Object.assign(emitStructure, { 'checkedKeys': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getCheckedNodeList().map(function (n) { return n.key; }) });
                break;
            case 'search':
                Object.assign(emitStructure, { 'matchedKeys': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getMatchedNodeList().map(function (n) { return n.key; }) });
                break;
            case 'expand':
                Object.assign(emitStructure, { 'nodes': this.getExpandedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getExpandedNodeList().map(function (n) { return n.key; }) });
                break;
        }
        return emitStructure;
    };
    NzTreeService.decorators = [
        { type: Injectable }
    ];
    return NzTreeService;
}());
export { NzTreeService };
function NzTreeService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeService.prototype.DRAG_SIDE_RANGE;
    /** @type {?} */
    NzTreeService.prototype.DRAG_MIN_GAP;
    /** @type {?} */
    NzTreeService.prototype.conductOption;
    /** @type {?} */
    NzTreeService.prototype.selectedNode;
    /** @type {?} */
    NzTreeService.prototype.targetNode;
    /** @type {?} */
    NzTreeService.prototype.rootNodes;
    /** @type {?} */
    NzTreeService.prototype.selectedNodeList;
    /** @type {?} */
    NzTreeService.prototype.expandedNodeList;
    /** @type {?} */
    NzTreeService.prototype.checkedNodeList;
    /** @type {?} */
    NzTreeService.prototype.halfCheckedNodeList;
    /** @type {?} */
    NzTreeService.prototype.matchedNodeList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztRQUkxRCx1QkFBa0IsSUFBSSxDQUFDO1FBQ3ZCLG9CQUFlLENBQUMsQ0FBQztRQUVqQixxQkFFSTtZQUNGLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUM7UUFHRixpQkFBMEIsRUFBRSxDQUFDO1FBQzdCLHdCQUFpQyxFQUFFLENBQUM7UUFDcEMsd0JBQWlDLEVBQUUsQ0FBQztRQUNwQyx1QkFBZ0MsRUFBRSxDQUFDO1FBQ25DLDJCQUFvQyxFQUFFLENBQUM7UUFDdkMsdUJBQWdDLEVBQUUsQ0FBQzs7SUFFbkM7O09BRUc7Ozs7OztJQUNILGdDQUFROzs7OztJQUFSLFVBQVMsT0FBcUI7UUFBOUIsaUJBV0M7UUFWQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxp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LE1BQU0sRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxFQUFMLENBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEYsTUFBTTtZQUNSLEtBQUssUUFBUTtnQkFDWCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzNFLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDckUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BGLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxFQUFMLENBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDckYsTUFBTTtTQUNUO1FBQ0QsT0FBTyxhQUFhLENBQUM7S0FDdEI7O2dCQXBnQkYsVUFBVTs7d0JBTlg7O1NBT2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xyXG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1ub2RlJztcclxuaW1wb3J0IHsgaXNDaGVja0Rpc2FibGVkLCBpc0luQXJyYXkgfSBmcm9tICcuL256LXRyZWUtdXRpbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOelRyZWVTZXJ2aWNlIHtcclxuICBEUkFHX1NJREVfUkFOR0UgPSAwLjI1O1xyXG4gIERSQUdfTUlOX0dBUCA9IDI7XHJcblxyXG4gIGNvbmR1Y3RPcHRpb246IHtcclxuICAgIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhblxyXG4gIH0gPSB7XHJcbiAgICBpc0NoZWNrU3RyaWN0bHk6IGZhbHNlXHJcbiAgfTtcclxuICBzZWxlY3RlZE5vZGU6IE56VHJlZU5vZGU7XHJcbiAgdGFyZ2V0Tm9kZTogTnpUcmVlTm9kZTtcclxuICByb290Tm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIHNlbGVjdGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIGV4cGFuZGVkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIGNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgaGFsZkNoZWNrZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XHJcbiAgbWF0Y2hlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgdHJlZSBub2RlcyB3aWxsIGNsZWFyIGRlZmF1bHQgbm9kZSBsaXN0XHJcbiAgICovXHJcbiAgaW5pdFRyZWUobnpOb2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvb3ROb2RlcyA9IG56Tm9kZXM7XHJcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0ID0gW107XHJcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XHJcbiAgICB0aGlzLm1hdGNoZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVmcmVzaENoZWNrU3RhdGUodGhpcy5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkTm9kZSgpOiBOelRyZWVOb2RlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZE5vZGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXQgc29tZSBsaXN0XHJcbiAgICovXHJcbiAgZ2V0U2VsZWN0ZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnc2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm4gY2hlY2tlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldENoZWNrZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnY2hlY2snKTtcclxuICB9XHJcblxyXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2hhbGZDaGVjaycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJuIGV4cGFuZGVkIG5vZGVzXHJcbiAgICovXHJcbiAgZ2V0RXhwYW5kZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZHVjdE5vZGVTdGF0ZSgnZXhwYW5kJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm4gc2VhcmNoIG1hdGNoZWQgbm9kZXNcclxuICAgKi9cclxuICBnZXRNYXRjaGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ21hdGNoJyk7XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZTogYW55W10pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZS5ldmVyeShpdGVtID0+IGl0ZW0gaW5zdGFuY2VvZiBOelRyZWVOb2RlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IHNlbGVjdGVkTm9kZUxpc3RcclxuICAgKi9cclxuICBjYWxjU2VsZWN0ZWRLZXlzKHNlbGVjdGVkS2V5czogc3RyaW5nW10sIG56Tm9kZXM6IE56VHJlZU5vZGVbXSwgaXNNdWx0aTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIGNvbnN0IGNhbGMgPSAobm9kZXM6IE56VHJlZU5vZGVbXSkgPT4ge1xyXG4gICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIHNlbGVjdGVkS2V5cykpIHtcclxuICAgICAgICAgIG5vZGUuc2V0U2VsZWN0ZWQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5vZGUuc2V0U2VsZWN0ZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgaXNNdWx0aSk7XHJcbiAgICAgICAgaWYgKG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjYWxjKG5vZGUuZ2V0Q2hpbGRyZW4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjYWxjKG56Tm9kZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgZXhwYW5kZWROb2RlTGlzdFxyXG4gICAqL1xyXG4gIGNhbGNFeHBhbmRlZEtleXMoZXhwYW5kZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIGNvbnN0IGNhbGMgPSAobm9kZXM6IE56VHJlZU5vZGVbXSkgPT4ge1xyXG4gICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgIGlmIChpc0luQXJyYXkobm9kZS5rZXksIGV4cGFuZGVkS2V5cykpIHtcclxuICAgICAgICAgIG5vZGUuc2V0RXhwYW5kZWQodHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLnNldEV4cGFuZGVkTm9kZUxpc3Qobm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5vZGUuc2V0RXhwYW5kZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNhbGMobm9kZS5nZXRDaGlsZHJlbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNhbGMobnpOb2Rlcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBjaGVja2VkTm9kZUxpc3RcclxuICAgKi9cclxuICBjYWxjQ2hlY2tlZEtleXMoY2hlY2tlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0ID0gW107XHJcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcclxuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBpZiAoaXNJbkFycmF5KG5vZGUua2V5LCBjaGVja2VkS2V5cykpIHtcclxuICAgICAgICAgIG5vZGUuc2V0Q2hlY2tlZCh0cnVlKTtcclxuICAgICAgICAgIHRoaXMuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub2RlLnNldENoZWNrZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobm9kZS5nZXRDaGlsZHJlbigpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNhbGMobm9kZS5nZXRDaGlsZHJlbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNhbGMobnpOb2Rlcyk7XHJcbiAgICAvLyBjb250cm9sbGVkIHN0YXRlXHJcbiAgICB0aGlzLnJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXQgZHJhZyBub2RlXHJcbiAgICovXHJcbiAgc2V0U2VsZWN0ZWROb2RlKG5vZGU/OiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG51bGw7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZSA9IG5vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXQgbm9kZSBzZWxlY3RlZCBzdGF0dXNcclxuICAgKi9cclxuICBzZXROb2RlQWN0aXZlKG5vZGU6IE56VHJlZU5vZGUsIGlzTXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IG5vZGUuaXNTZWxlY3RlZDtcclxuICAgIGlmIChub2RlLmlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc011bHRpcGxlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgIG4uc2V0U2VsZWN0ZWQoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBub2RlLnNldFNlbGVjdGVkKCFpc1NlbGVjdGVkKTtcclxuICAgIHRoaXMuc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlLCBpc011bHRpcGxlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZCBvciByZW1vdmUgbm9kZSB0byBzZWxlY3RlZE5vZGVMaXN0XHJcbiAgICovXHJcbiAgc2V0U2VsZWN0ZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlLCBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XHJcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xyXG4gICAgICBpZiAobm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobm9kZS5pc1NlbGVjdGVkICYmIGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFsgbm9kZSBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIW5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbWVyZ2UgY2hlY2tlZCBub2Rlc1xyXG4gICAqL1xyXG4gIHNldEhhbGZDaGVja2VkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcclxuICAgIGlmIChub2RlLmlzSGFsZkNoZWNrZWQgJiYgaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDaGVja2VkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoZWNrZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xyXG4gICAgaWYgKG5vZGUuaXNDaGVja2VkICYmIGluZGV4ID09PSAtMSkge1xyXG4gICAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0NoZWNrZWQgJiYgaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY29uZHVjdCBjaGVja2VkL3NlbGVjdGVkL2V4cGFuZGVkIGtleXNcclxuICAgKi9cclxuICBjb25kdWN0Tm9kZVN0YXRlKHR5cGU6IHN0cmluZyA9ICdjaGVjaycpOiBOelRyZWVOb2RlW10ge1xyXG4gICAgY29uc3QgcmVzdWx0Tm9kZXNMaXN0ID0gW107XHJcbiAgICBjb25zdCBsb29wID0gKG5vZGU6IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnY2hlY2snOlxyXG4gICAgICAgICAgaWYgKG5vZGUuaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgICAgICAgIGlmICghbm9kZS5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb29wKGNoaWxkKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgIGxvb3AoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2hhbGZDaGVjayc6XHJcbiAgICAgICAgICBpZiAoIXRoaXMuY29uZHVjdE9wdGlvbi5pc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuaXNIYWxmQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGxvb3AoY2hpbGQpO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzZWxlY3QnOlxyXG4gICAgICAgICAgaWYgKG5vZGUuaXNTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICByZXN1bHROb2Rlc0xpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgbG9vcChjaGlsZCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2V4cGFuZCc6XHJcbiAgICAgICAgICBpZiAobm9kZS5pc0V4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBsb29wKGNoaWxkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbWF0Y2gnOlxyXG4gICAgICAgICAgaWYgKG5vZGUuaXNNYXRjaGVkKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdE5vZGVzTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBsb29wKGNoaWxkKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnJvb3ROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICBsb29wKG5vZGUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0Tm9kZXNMaXN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGV4cGFuZGVkIG5vZGVzXHJcbiAgICovXHJcbiAgc2V0RXhwYW5kZWROb2RlTGlzdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZS5pc0xlYWYpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmV4cGFuZGVkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcclxuICAgIGlmIChub2RlLmlzRXhwYW5kZWQgJiYgaW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdC5wdXNoKG5vZGUpO1xyXG4gICAgfSBlbHNlIGlmICghbm9kZS5pc0V4cGFuZGVkICYmIGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGVjayBzdGF0ZVxyXG4gICAqIEBwYXJhbSBub2RlXHJcbiAgICovXHJcbiAgcmVmcmVzaENoZWNrU3RhdGUoaXNDaGVja1N0cmljdGx5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGlmIChpc0NoZWNrU3RyaWN0bHkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hlY2tlZE5vZGVMaXN0LmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgIHRoaXMuY29uZHVjdChub2RlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uZHVjdChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0NoZWNrZWQgPSBub2RlLmlzQ2hlY2tlZDtcclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgIHRoaXMuY29uZHVjdFVwKG5vZGUpO1xyXG4gICAgICB0aGlzLmNvbmR1Y3REb3duKG5vZGUsIGlzQ2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAx44CBY2hpbGRyZW4gaGFsZiBjaGVja2VkXHJcbiAgICogMuOAgWNoaWxkcmVuIGFsbCBjaGVja2VkLCBwYXJlbnQgY2hlY2tlZFxyXG4gICAqIDPjgIFubyBjaGlsZHJlbiBjaGVja2VkXHJcbiAgICovXHJcbiAgY29uZHVjdFVwKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBub2RlLmdldFBhcmVudE5vZGUoKTtcclxuICAgIC8vIOWFqOemgeeUqOiKgueCueS4jemAieS4rVxyXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQocGFyZW50Tm9kZSkpIHtcclxuICAgICAgICBpZiAocGFyZW50Tm9kZS5nZXRDaGlsZHJlbigpLmV2ZXJ5KGNoaWxkID0+IGlzQ2hlY2tEaXNhYmxlZChjaGlsZCkgfHwgKCFjaGlsZC5pc0hhbGZDaGVja2VkICYmIGNoaWxkLmlzQ2hlY2tlZCkpKSB7XHJcbiAgICAgICAgICBwYXJlbnROb2RlLnNldENoZWNrZWQodHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJlbnROb2RlLmdldENoaWxkcmVuKCkuc29tZShjaGlsZCA9PiBjaGlsZC5pc0hhbGZDaGVja2VkIHx8IGNoaWxkLmlzQ2hlY2tlZCkpIHtcclxuICAgICAgICAgIHBhcmVudE5vZGUuc2V0Q2hlY2tlZChmYWxzZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHBhcmVudE5vZGUuc2V0Q2hlY2tlZChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0SGFsZkNoZWNrZWROb2RlTGlzdChwYXJlbnROb2RlKTtcclxuICAgICAgdGhpcy5jb25kdWN0VXAocGFyZW50Tm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBjaGlsZCBjaGVjayBzdGF0ZVxyXG4gICAqL1xyXG4gIGNvbmR1Y3REb3duKG5vZGU6IE56VHJlZU5vZGUsIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWlzQ2hlY2tEaXNhYmxlZChub2RlKSkge1xyXG4gICAgICBub2RlLnNldENoZWNrZWQodmFsdWUpO1xyXG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgdGhpcy5jb25kdWN0RG93bihuLCB2YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoIHZhbHVlICYgZXhwYW5kIG5vZGVcclxuICAgKiBzaG91bGQgYWRkIGV4cGFuZGxpc3RcclxuICAgKi9cclxuICBzZWFyY2hFeHBhbmQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIGlmICghaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRvIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcclxuICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgZXhwYW5kUGFyZW50ID0gKHA6IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgLy8gZXhwYW5kIHBhcmVudCBub2RlXHJcbiAgICAgIGlmIChwLmdldFBhcmVudE5vZGUoKSkge1xyXG4gICAgICAgIHAuZ2V0UGFyZW50Tm9kZSgpLnNldEV4cGFuZGVkKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwYW5kZWROb2RlTGlzdChwLmdldFBhcmVudE5vZGUoKSk7XHJcbiAgICAgICAgZXhwYW5kUGFyZW50KHAuZ2V0UGFyZW50Tm9kZSgpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNlYXJjaENoaWxkID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgaWYgKHZhbHVlICYmIG4udGl0bGUuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgLy8gbWF0Y2ggdGhlIG5vZGVcclxuICAgICAgICBuLmlzTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QucHVzaChuKTtcclxuICAgICAgICAvLyBleHBhbmQgcGFyZW50Tm9kZVxyXG4gICAgICAgIGV4cGFuZFBhcmVudChuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuLmlzTWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIG4uc2V0RXhwYW5kZWQoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0RXhwYW5kZWROb2RlTGlzdChuKTtcclxuICAgICAgfVxyXG4gICAgICBuLmNoaWxkcmVuLmZvckVhY2goZyA9PiB7XHJcbiAgICAgICAgc2VhcmNoQ2hpbGQoZyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMucm9vdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGRyYWcgZXZlbnRcclxuICAgKi9cclxuICByZWZyZXNoRHJhZ05vZGUobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgaWYgKG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgLy8gdW50aWwgcm9vdFxyXG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hEcmFnTm9kZShjaGlsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXQgbm9kZSBsZXZlbFxyXG4gIHJlc2V0Tm9kZUxldmVsKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGlmIChub2RlLmdldFBhcmVudE5vZGUoKSkge1xyXG4gICAgICBub2RlLmxldmVsID0gbm9kZS5nZXRQYXJlbnROb2RlKCkubGV2ZWwgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm9kZS5sZXZlbCA9IDA7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuZ2V0Q2hpbGRyZW4oKSkge1xyXG4gICAgICB0aGlzLnJlc2V0Tm9kZUxldmVsKGNoaWxkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbGNEcm9wUG9zaXRpb24oZXZlbnQ6IERyYWdFdmVudCk6IG51bWJlciB7XHJcbiAgICBjb25zdCB7IGNsaWVudFkgfSA9IGV2ZW50O1xyXG4gICAgLy8gdG8gZml4IGZpcmVmb3ggdW5kZWZpbmVkXHJcbiAgICBjb25zdCB7IHRvcCwgYm90dG9tLCBoZWlnaHQgfSA9IGV2ZW50LnNyY0VsZW1lbnQgPyBldmVudC5zcmNFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGRlcyA9IE1hdGgubWF4KGhlaWdodCAqIHRoaXMuRFJBR19TSURFX1JBTkdFLCB0aGlzLkRSQUdfTUlOX0dBUCk7XHJcblxyXG4gICAgaWYgKGNsaWVudFkgPD0gdG9wICsgZGVzKSB7XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH0gZWxzZSBpZiAoY2xpZW50WSA+PSBib3R0b20gLSBkZXMpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkcm9wXHJcbiAgICogMDogaW5uZXIgLTE6IHByZSAxOiBuZXh0XHJcbiAgICovXHJcbiAgZHJvcEFuZEFwcGx5KHRhcmdldE5vZGU6IE56VHJlZU5vZGUsIGRyYWdQb3M6IG51bWJlciA9IC0xKTogdm9pZCB7XHJcbiAgICBpZiAoIXRhcmdldE5vZGUgfHwgZHJhZ1BvcyA+IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gdGFyZ2V0Tm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICBjb25zdCBpc1NlbGVjdGVkUm9vdE5vZGUgPSB0aGlzLnNlbGVjdGVkTm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICAvLyByZW1vdmUgdGhlIGRyYWdOb2RlXHJcbiAgICBpZiAoaXNTZWxlY3RlZFJvb3ROb2RlKSB7XHJcbiAgICAgIGlzU2VsZWN0ZWRSb290Tm9kZS5nZXRDaGlsZHJlbigpLnNwbGljZShpc1NlbGVjdGVkUm9vdE5vZGUuZ2V0Q2hpbGRyZW4oKS5pbmRleE9mKHRoaXMuc2VsZWN0ZWROb2RlKSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJvb3ROb2Rlcy5zcGxpY2UodGhpcy5yb290Tm9kZXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkTm9kZSksIDEpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChkcmFnUG9zKSB7XHJcbiAgICAgIGNhc2UgMDpcclxuICAgICAgICB0YXJnZXROb2RlLmFkZENoaWxkcmVuKFsgdGhpcy5zZWxlY3RlZE5vZGUgXSk7XHJcbiAgICAgICAgdGhpcy5yZXNldE5vZGVMZXZlbCh0YXJnZXROb2RlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAtMTpcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNvbnN0IHRJbmRleCA9IGRyYWdQb3MgPT09IDEgPyAxIDogMDtcclxuICAgICAgICBpZiAodGFyZ2V0UGFyZW50KSB7XHJcbiAgICAgICAgICB0YXJnZXRQYXJlbnQuYWRkQ2hpbGRyZW4oWyB0aGlzLnNlbGVjdGVkTm9kZSBdLCB0YXJnZXRQYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0YXJnZXROb2RlKSArIHRJbmRleCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLnJvb3ROb2Rlcy5pbmRleE9mKHRhcmdldE5vZGUpICsgdEluZGV4O1xyXG4gICAgICAgICAgLy8g5qC56IqC54K55o+S5YWlXHJcbiAgICAgICAgICB0aGlzLnJvb3ROb2Rlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDAsIHRoaXMuc2VsZWN0ZWROb2RlKTtcclxuICAgICAgICAgIHRoaXMucm9vdE5vZGVzWyB0YXJnZXRJbmRleCBdLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5yb290Tm9kZXNbIHRhcmdldEluZGV4IF0ubGV2ZWwgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIC8vIGZsdXNoIGFsbCBub2Rlc1xyXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBlbWl0IFN0cnVjdHVyZVxyXG4gICAqIGV2ZW50TmFtZVxyXG4gICAqIG5vZGVcclxuICAgKiBldmVudDogTW91c2VFdmVudCAvIERyYWdFdmVudFxyXG4gICAqIGRyYWdOb2RlXHJcbiAgICovXHJcbiAgZm9ybWF0RXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG5vZGU6IE56VHJlZU5vZGUsIGV2ZW50OiBNb3VzZUV2ZW50IHwgRHJhZ0V2ZW50KTogTnpGb3JtYXRFbWl0RXZlbnQge1xyXG4gICAgY29uc3QgZW1pdFN0cnVjdHVyZSA9IHtcclxuICAgICAgJ2V2ZW50TmFtZSc6IGV2ZW50TmFtZSxcclxuICAgICAgJ25vZGUnICAgICA6IG5vZGUsXHJcbiAgICAgICdldmVudCcgICAgOiBldmVudFxyXG4gICAgfTtcclxuICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XHJcbiAgICAgIGNhc2UgJ2RyYWdzdGFydCc6XHJcbiAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XHJcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcclxuICAgICAgY2FzZSAnZHJhZ2xlYXZlJzpcclxuICAgICAgY2FzZSAnZHJvcCc6XHJcbiAgICAgIGNhc2UgJ2RyYWdlbmQnOlxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnZHJhZ05vZGUnOiB0aGlzLmdldFNlbGVjdGVkTm9kZSgpIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjbGljayc6XHJcbiAgICAgIGNhc2UgJ2RibGNsaWNrJzpcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ3NlbGVjdGVkS2V5cyc6IHRoaXMuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpIH0pO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAnbm9kZXMnOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKSB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2tleXMnOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKS5tYXAobiA9PiBuLmtleSkgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NoZWNrJzpcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2NoZWNrZWRLZXlzJzogdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKSB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ25vZGVzJzogdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKSB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2tleXMnOiB0aGlzLmdldENoZWNrZWROb2RlTGlzdCgpLm1hcChuID0+IG4ua2V5KSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc2VhcmNoJzpcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ21hdGNoZWRLZXlzJzogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKSB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ25vZGVzJzogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKSB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2tleXMnOiB0aGlzLmdldE1hdGNoZWROb2RlTGlzdCgpLm1hcChuID0+IG4ua2V5KSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZXhwYW5kJzpcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ25vZGVzJzogdGhpcy5nZXRFeHBhbmRlZE5vZGVMaXN0KCkgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRFeHBhbmRlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVtaXRTdHJ1Y3R1cmU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=