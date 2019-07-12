/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzTreeNode } from './nz-tree-node';
import { isCheckDisabled, isInArray } from './nz-tree-util';
export class NzTreeService {
    constructor() {
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
     * @param {?} nzNodes
     * @return {?}
     */
    initTree(nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.expandedNodeList = [];
        this.matchedNodeList = [];
        setTimeout(() => {
            this.refreshCheckState(this.conductOption.isCheckStrictly);
        });
    }
    /**
     * @return {?}
     */
    getSelectedNode() {
        return this.selectedNode;
    }
    /**
     * get some list
     * @return {?}
     */
    getSelectedNodeList() {
        return this.conductNodeState('select');
    }
    /**
     * return checked nodes
     * @return {?}
     */
    getCheckedNodeList() {
        return this.conductNodeState('check');
    }
    /**
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.conductNodeState('halfCheck');
    }
    /**
     * return expanded nodes
     * @return {?}
     */
    getExpandedNodeList() {
        return this.conductNodeState('expand');
    }
    /**
     * return search matched nodes
     * @return {?}
     */
    getMatchedNodeList() {
        return this.conductNodeState('match');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isArrayOfNzTreeNode(value) {
        return value.every(item => item instanceof NzTreeNode);
    }
    /**
     * reset selectedNodeList
     * @param {?} selectedKeys
     * @param {?} nzNodes
     * @param {?=} isMulti
     * @return {?}
     */
    calcSelectedKeys(selectedKeys, nzNodes, isMulti = false) {
        this.selectedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, selectedKeys)) {
                    node.setSelected(true);
                }
                else {
                    node.setSelected(false);
                }
                this.setSelectedNodeList(node, isMulti);
                if (node.getChildren().length > 0) {
                    calc(node.getChildren());
                }
            });
        };
        calc(nzNodes);
    }
    /**
     * reset expandedNodeList
     * @param {?} expandedKeys
     * @param {?} nzNodes
     * @return {?}
     */
    calcExpandedKeys(expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, expandedKeys)) {
                    node.setExpanded(true);
                    this.setExpandedNodeList(node);
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
    }
    /**
     * reset checkedNodeList
     * @param {?} checkedKeys
     * @param {?} nzNodes
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    calcCheckedKeys(checkedKeys, nzNodes, isCheckStrictly = false) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, checkedKeys)) {
                    node.setChecked(true);
                    this.setCheckedNodeList(node);
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
    }
    /**
     * set drag node
     * @param {?=} node
     * @return {?}
     */
    setSelectedNode(node) {
        this.selectedNode = null;
        if (node) {
            this.selectedNode = node;
        }
    }
    /**
     * set node selected status
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    setNodeActive(node, isMultiple = false) {
        /** @type {?} */
        const isSelected = node.isSelected;
        if (node.isDisabled) {
            return;
        }
        if (!isMultiple) {
            this.selectedNodeList.forEach(n => {
                n.setSelected(false);
            });
            this.selectedNodeList = [];
        }
        node.setSelected(!isSelected);
        this.setSelectedNodeList(node, isMultiple);
    }
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    setSelectedNodeList(node, isMultiple = false) {
        /** @type {?} */
        const index = this.selectedNodeList.findIndex(n => node.key === n.key);
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
    }
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    setHalfCheckedNodeList(node) {
        /** @type {?} */
        const index = this.halfCheckedNodeList.findIndex(n => node.key === n.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList.splice(index, 1);
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    setCheckedNodeList(node) {
        /** @type {?} */
        const index = this.checkedNodeList.findIndex(n => node.key === n.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList.splice(index, 1);
        }
    }
    /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    conductNodeState(type = 'check') {
        /** @type {?} */
        const resultNodesList = [];
        /** @type {?} */
        const loop = (node) => {
            switch (type) {
                case 'check':
                    if (node.isChecked) {
                        resultNodesList.push(node);
                    }
                    if (!this.conductOption.isCheckStrictly) {
                        if (!node.isChecked) {
                            node.getChildren().forEach(child => {
                                loop(child);
                            });
                        }
                    }
                    else {
                        node.getChildren().forEach(child => {
                            loop(child);
                        });
                    }
                    break;
                case 'halfCheck':
                    if (!this.conductOption.isCheckStrictly) {
                        if (node.isHalfChecked) {
                            resultNodesList.push(node);
                            node.getChildren().forEach(child => {
                                loop(child);
                            });
                        }
                    }
                    break;
                case 'select':
                    if (node.isSelected) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(child => {
                        loop(child);
                    });
                    break;
                case 'expand':
                    if (node.isExpanded) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(child => {
                        loop(child);
                    });
                    break;
                case 'match':
                    if (node.isMatched) {
                        resultNodesList.push(node);
                    }
                    node.getChildren().forEach(child => {
                        loop(child);
                    });
                    break;
            }
        };
        this.rootNodes.forEach(node => {
            loop(node);
        });
        return resultNodesList;
    }
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    setExpandedNodeList(node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        const index = this.expandedNodeList.findIndex(n => node.key === n.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
        }
    }
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    refreshCheckState(isCheckStrictly = false) {
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(node => {
            this.conduct(node);
        });
    }
    /**
     * @param {?} node
     * @return {?}
     */
    conduct(node) {
        /** @type {?} */
        const isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    }
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    conductUp(node) {
        /** @type {?} */
        const parentNode = node.getParentNode();
        // 全禁用节点不选中
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.getChildren().every(child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked))) {
                    parentNode.setChecked(true);
                }
                else if (parentNode.getChildren().some(child => child.isHalfChecked || child.isChecked)) {
                    parentNode.setChecked(false, true);
                }
                else {
                    parentNode.setChecked(false);
                }
            }
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    }
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    conductDown(node, value) {
        if (!isCheckDisabled(node)) {
            node.setChecked(value);
            node.children.forEach(n => {
                this.conductDown(n, value);
            });
        }
    }
    /**
     * search value & expand node
     * should add expandlist
     * @param {?} value
     * @return {?}
     */
    searchExpand(value) {
        this.matchedNodeList = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        this.expandedNodeList = [];
        /** @type {?} */
        const expandParent = (p) => {
            // expand parent node
            if (p.getParentNode()) {
                p.getParentNode().setExpanded(true);
                this.setExpandedNodeList(p.getParentNode());
                expandParent(p.getParentNode());
            }
        };
        /** @type {?} */
        const searchChild = (n) => {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
                n.setExpanded(false);
                this.setExpandedNodeList(n);
            }
            n.children.forEach(g => {
                searchChild(g);
            });
        };
        this.rootNodes.forEach(child => {
            searchChild(child);
        });
    }
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    refreshDragNode(node) {
        if (node.getChildren().length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach((child) => {
                this.refreshDragNode(child);
            });
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    resetNodeLevel(node) {
        if (node.getParentNode()) {
            node.level = node.getParentNode().level + 1;
        }
        else {
            node.level = 0;
        }
        for (const child of node.getChildren()) {
            this.resetNodeLevel(child);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    calcDropPosition(event) {
        const { clientY } = event;
        const { top, bottom, height } = event.srcElement ? event.srcElement.getBoundingClientRect() : (/** @type {?} */ (event.target)).getBoundingClientRect();
        /** @type {?} */
        const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    }
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    dropAndApply(targetNode, dragPos = -1) {
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        const targetParent = targetNode.getParentNode();
        /** @type {?} */
        const isSelectedRootNode = this.selectedNode.getParentNode();
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
                const tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    if (this.selectedNode.getParentNode()) {
                        this.resetNodeLevel(this.selectedNode.getParentNode());
                    }
                }
                else {
                    /** @type {?} */
                    const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // 根节点插入
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach((child) => {
            this.refreshDragNode(child);
        });
    }
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
    formatEvent(eventName, node, event) {
        /** @type {?} */
        const emitStructure = {
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
                Object.assign(emitStructure, { 'keys': this.getSelectedNodeList().map(n => n.key) });
                break;
            case 'check':
                Object.assign(emitStructure, { 'checkedKeys': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getCheckedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getCheckedNodeList().map(n => n.key) });
                break;
            case 'search':
                Object.assign(emitStructure, { 'matchedKeys': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'nodes': this.getMatchedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getMatchedNodeList().map(n => n.key) });
                break;
            case 'expand':
                Object.assign(emitStructure, { 'nodes': this.getExpandedNodeList() });
                Object.assign(emitStructure, { 'keys': this.getExpandedNodeList().map(n => n.key) });
                break;
        }
        return emitStructure;
    }
}
NzTreeService.decorators = [
    { type: Injectable }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1RCxNQUFNLE9BQU8sYUFBYTs7UUFDeEIsdUJBQWtCLElBQUksQ0FBQztRQUN2QixvQkFBZSxDQUFDLENBQUM7UUFFakIscUJBRUk7WUFDRixlQUFlLEVBQUUsS0FBSztTQUN2QixDQUFDO1FBR0YsaUJBQTBCLEVBQUUsQ0FBQztRQUM3Qix3QkFBaUMsRUFBRSxDQUFDO1FBQ3BDLHdCQUFpQyxFQUFFLENBQUM7UUFDcEMsdUJBQWdDLEVBQUUsQ0FBQztRQUNuQywyQkFBb0MsRUFBRSxDQUFDO1FBQ3ZDLHVCQUFnQyxFQUFFLENBQUM7Ozs7Ozs7SUFLbkMsUUFBUSxDQUFDLE9BQXFCO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFB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QUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3JGLE1BQU07U0FDVDtRQUNELE9BQU8sYUFBYSxDQUFDO0tBQ3RCOzs7WUFwZ0JGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcclxuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtbm9kZSc7XHJcbmltcG9ydCB7IGlzQ2hlY2tEaXNhYmxlZCwgaXNJbkFycmF5IH0gZnJvbSAnLi9uei10cmVlLXV0aWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpUcmVlU2VydmljZSB7XHJcbiAgRFJBR19TSURFX1JBTkdFID0gMC4yNTtcclxuICBEUkFHX01JTl9HQVAgPSAyO1xyXG5cclxuICBjb25kdWN0T3B0aW9uOiB7XHJcbiAgICBpc0NoZWNrU3RyaWN0bHk6IGJvb2xlYW5cclxuICB9ID0ge1xyXG4gICAgaXNDaGVja1N0cmljdGx5OiBmYWxzZVxyXG4gIH07XHJcbiAgc2VsZWN0ZWROb2RlOiBOelRyZWVOb2RlO1xyXG4gIHRhcmdldE5vZGU6IE56VHJlZU5vZGU7XHJcbiAgcm9vdE5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcclxuICBzZWxlY3RlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcclxuICBleHBhbmRlZE5vZGVMaXN0OiBOelRyZWVOb2RlW10gPSBbXTtcclxuICBjaGVja2VkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIGhhbGZDaGVja2VkTm9kZUxpc3Q6IE56VHJlZU5vZGVbXSA9IFtdO1xyXG4gIG1hdGNoZWROb2RlTGlzdDogTnpUcmVlTm9kZVtdID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IHRyZWUgbm9kZXMgd2lsbCBjbGVhciBkZWZhdWx0IG5vZGUgbGlzdFxyXG4gICAqL1xyXG4gIGluaXRUcmVlKG56Tm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5yb290Tm9kZXMgPSBuek5vZGVzO1xyXG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcclxuICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlZnJlc2hDaGVja1N0YXRlKHRoaXMuY29uZHVjdE9wdGlvbi5pc0NoZWNrU3RyaWN0bHkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZE5vZGUoKTogTnpUcmVlTm9kZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWROb2RlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0IHNvbWUgbGlzdFxyXG4gICAqL1xyXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ3NlbGVjdCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJuIGNoZWNrZWQgbm9kZXNcclxuICAgKi9cclxuICBnZXRDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2NoZWNrJyk7XHJcbiAgfVxyXG5cclxuICBnZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdoYWxmQ2hlY2snKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybiBleHBhbmRlZCBub2Rlc1xyXG4gICAqL1xyXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmR1Y3ROb2RlU3RhdGUoJ2V4cGFuZCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJuIHNlYXJjaCBtYXRjaGVkIG5vZGVzXHJcbiAgICovXHJcbiAgZ2V0TWF0Y2hlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25kdWN0Tm9kZVN0YXRlKCdtYXRjaCcpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGlzQXJyYXlPZk56VHJlZU5vZGUodmFsdWU6IGFueVtdKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUuZXZlcnkoaXRlbSA9PiBpdGVtIGluc3RhbmNlb2YgTnpUcmVlTm9kZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXNldCBzZWxlY3RlZE5vZGVMaXN0XHJcbiAgICovXHJcbiAgY2FsY1NlbGVjdGVkS2V5cyhzZWxlY3RlZEtleXM6IHN0cmluZ1tdLCBuek5vZGVzOiBOelRyZWVOb2RlW10sIGlzTXVsdGk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZE5vZGVMaXN0ID0gW107XHJcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcclxuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBpZiAoaXNJbkFycmF5KG5vZGUua2V5LCBzZWxlY3RlZEtleXMpKSB7XHJcbiAgICAgICAgICBub2RlLnNldFNlbGVjdGVkKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub2RlLnNldFNlbGVjdGVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZE5vZGVMaXN0KG5vZGUsIGlzTXVsdGkpO1xyXG4gICAgICAgIGlmIChub2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY2FsYyhub2RlLmdldENoaWxkcmVuKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY2FsYyhuek5vZGVzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcclxuICAgKi9cclxuICBjYWxjRXhwYW5kZWRLZXlzKGV4cGFuZGVkS2V5czogc3RyaW5nW10sIG56Tm9kZXM6IE56VHJlZU5vZGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5leHBhbmRlZE5vZGVMaXN0ID0gW107XHJcbiAgICBjb25zdCBjYWxjID0gKG5vZGVzOiBOelRyZWVOb2RlW10pID0+IHtcclxuICAgICAgbm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgICBpZiAoaXNJbkFycmF5KG5vZGUua2V5LCBleHBhbmRlZEtleXMpKSB7XHJcbiAgICAgICAgICBub2RlLnNldEV4cGFuZGVkKHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5zZXRFeHBhbmRlZE5vZGVMaXN0KG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBub2RlLnNldEV4cGFuZGVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjYWxjKG5vZGUuZ2V0Q2hpbGRyZW4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjYWxjKG56Tm9kZXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgY2hlY2tlZE5vZGVMaXN0XHJcbiAgICovXHJcbiAgY2FsY0NoZWNrZWRLZXlzKGNoZWNrZWRLZXlzOiBzdHJpbmdbXSwgbnpOb2RlczogTnpUcmVlTm9kZVtdLCBpc0NoZWNrU3RyaWN0bHk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGVja2VkTm9kZUxpc3QgPSBbXTtcclxuICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgY2FsYyA9IChub2RlczogTnpUcmVlTm9kZVtdKSA9PiB7XHJcbiAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgaWYgKGlzSW5BcnJheShub2RlLmtleSwgY2hlY2tlZEtleXMpKSB7XHJcbiAgICAgICAgICBub2RlLnNldENoZWNrZWQodHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLnNldENoZWNrZWROb2RlTGlzdChub2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbm9kZS5zZXRDaGVja2VkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjYWxjKG5vZGUuZ2V0Q2hpbGRyZW4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjYWxjKG56Tm9kZXMpO1xyXG4gICAgLy8gY29udHJvbGxlZCBzdGF0ZVxyXG4gICAgdGhpcy5yZWZyZXNoQ2hlY2tTdGF0ZShpc0NoZWNrU3RyaWN0bHkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGRyYWcgbm9kZVxyXG4gICAqL1xyXG4gIHNldFNlbGVjdGVkTm9kZShub2RlPzogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBudWxsO1xyXG4gICAgaWYgKG5vZGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZE5vZGUgPSBub2RlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IG5vZGUgc2VsZWN0ZWQgc3RhdHVzXHJcbiAgICovXHJcbiAgc2V0Tm9kZUFjdGl2ZShub2RlOiBOelRyZWVOb2RlLCBpc011bHRpcGxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBub2RlLmlzU2VsZWN0ZWQ7XHJcbiAgICBpZiAobm9kZS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghaXNNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QuZm9yRWFjaChuID0+IHtcclxuICAgICAgICBuLnNldFNlbGVjdGVkKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlTGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgbm9kZS5zZXRTZWxlY3RlZCghaXNTZWxlY3RlZCk7XHJcbiAgICB0aGlzLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgaXNNdWx0aXBsZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGQgb3IgcmVtb3ZlIG5vZGUgdG8gc2VsZWN0ZWROb2RlTGlzdFxyXG4gICAqL1xyXG4gIHNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSwgaXNNdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWROb2RlTGlzdC5maW5kSW5kZXgobiA9PiBub2RlLmtleSA9PT0gbi5rZXkpO1xyXG4gICAgaWYgKGlzTXVsdGlwbGUpIHtcclxuICAgICAgaWYgKG5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG5vZGUuaXNTZWxlY3RlZCAmJiBpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3QgPSBbIG5vZGUgXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFub2RlLmlzU2VsZWN0ZWQgJiYgaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIG1lcmdlIGNoZWNrZWQgbm9kZXNcclxuICAgKi9cclxuICBzZXRIYWxmQ2hlY2tlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5oYWxmQ2hlY2tlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XHJcbiAgICBpZiAobm9kZS5pc0hhbGZDaGVja2VkICYmIGluZGV4ID09PSAtMSkge1xyXG4gICAgICB0aGlzLmhhbGZDaGVja2VkTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNIYWxmQ2hlY2tlZCAmJiBpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuaGFsZkNoZWNrZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2VkTm9kZUxpc3QuZmluZEluZGV4KG4gPT4gbm9kZS5rZXkgPT09IG4ua2V5KTtcclxuICAgIGlmIChub2RlLmlzQ2hlY2tlZCAmJiBpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNDaGVja2VkICYmIGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5jaGVja2VkTm9kZUxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNvbmR1Y3QgY2hlY2tlZC9zZWxlY3RlZC9leHBhbmRlZCBrZXlzXHJcbiAgICovXHJcbiAgY29uZHVjdE5vZGVTdGF0ZSh0eXBlOiBzdHJpbmcgPSAnY2hlY2snKTogTnpUcmVlTm9kZVtdIHtcclxuICAgIGNvbnN0IHJlc3VsdE5vZGVzTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgbG9vcCA9IChub2RlOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2NoZWNrJzpcclxuICAgICAgICAgIGlmIChub2RlLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICByZXN1bHROb2Rlc0xpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghdGhpcy5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSkge1xyXG4gICAgICAgICAgICBpZiAoIW5vZGUuaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZHJlbigpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9vcChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICBsb29wKGNoaWxkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdoYWxmQ2hlY2snOlxyXG4gICAgICAgICAgaWYgKCF0aGlzLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmlzSGFsZkNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICByZXN1bHROb2Rlc0xpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb29wKGNoaWxkKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcclxuICAgICAgICAgIGlmIChub2RlLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgcmVzdWx0Tm9kZXNMaXN0LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBub2RlLmdldENoaWxkcmVuKCkuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGxvb3AoY2hpbGQpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdleHBhbmQnOlxyXG4gICAgICAgICAgaWYgKG5vZGUuaXNFeHBhbmRlZCkge1xyXG4gICAgICAgICAgICByZXN1bHROb2Rlc0xpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgbG9vcChjaGlsZCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21hdGNoJzpcclxuICAgICAgICAgIGlmIChub2RlLmlzTWF0Y2hlZCkge1xyXG4gICAgICAgICAgICByZXN1bHROb2Rlc0xpc3QucHVzaChub2RlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgbG9vcChjaGlsZCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5yb290Tm9kZXMuZm9yRWFjaChub2RlID0+IHtcclxuICAgICAgbG9vcChub2RlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdE5vZGVzTGlzdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNldCBleHBhbmRlZCBub2Rlc1xyXG4gICAqL1xyXG4gIHNldEV4cGFuZGVkTm9kZUxpc3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgaWYgKG5vZGUuaXNMZWFmKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5leHBhbmRlZE5vZGVMaXN0LmZpbmRJbmRleChuID0+IG5vZGUua2V5ID09PSBuLmtleSk7XHJcbiAgICBpZiAobm9kZS5pc0V4cGFuZGVkICYmIGluZGV4ID09PSAtMSkge1xyXG4gICAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QucHVzaChub2RlKTtcclxuICAgIH0gZWxzZSBpZiAoIW5vZGUuaXNFeHBhbmRlZCAmJiBpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2hlY2sgc3RhdGVcclxuICAgKiBAcGFyYW0gbm9kZVxyXG4gICAqL1xyXG4gIHJlZnJlc2hDaGVja1N0YXRlKGlzQ2hlY2tTdHJpY3RseTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAoaXNDaGVja1N0cmljdGx5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoZWNrZWROb2RlTGlzdC5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICB0aGlzLmNvbmR1Y3Qobm9kZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbmR1Y3Qobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNDaGVja2VkID0gbm9kZS5pc0NoZWNrZWQ7XHJcbiAgICBpZiAobm9kZSkge1xyXG4gICAgICB0aGlzLmNvbmR1Y3RVcChub2RlKTtcclxuICAgICAgdGhpcy5jb25kdWN0RG93bihub2RlLCBpc0NoZWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogMeOAgWNoaWxkcmVuIGhhbGYgY2hlY2tlZFxyXG4gICAqIDLjgIFjaGlsZHJlbiBhbGwgY2hlY2tlZCwgcGFyZW50IGNoZWNrZWRcclxuICAgKiAz44CBbm8gY2hpbGRyZW4gY2hlY2tlZFxyXG4gICAqL1xyXG4gIGNvbmR1Y3RVcChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYXJlbnROb2RlID0gbm9kZS5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICAvLyDlhajnpoHnlKjoioLngrnkuI3pgInkuK1cclxuICAgIGlmIChwYXJlbnROb2RlKSB7XHJcbiAgICAgIGlmICghaXNDaGVja0Rpc2FibGVkKHBhcmVudE5vZGUpKSB7XHJcbiAgICAgICAgaWYgKHBhcmVudE5vZGUuZ2V0Q2hpbGRyZW4oKS5ldmVyeShjaGlsZCA9PiBpc0NoZWNrRGlzYWJsZWQoY2hpbGQpIHx8ICghY2hpbGQuaXNIYWxmQ2hlY2tlZCAmJiBjaGlsZC5pc0NoZWNrZWQpKSkge1xyXG4gICAgICAgICAgcGFyZW50Tm9kZS5zZXRDaGVja2VkKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50Tm9kZS5nZXRDaGlsZHJlbigpLnNvbWUoY2hpbGQgPT4gY2hpbGQuaXNIYWxmQ2hlY2tlZCB8fCBjaGlsZC5pc0NoZWNrZWQpKSB7XHJcbiAgICAgICAgICBwYXJlbnROb2RlLnNldENoZWNrZWQoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwYXJlbnROb2RlLnNldENoZWNrZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldEhhbGZDaGVja2VkTm9kZUxpc3QocGFyZW50Tm9kZSk7XHJcbiAgICAgIHRoaXMuY29uZHVjdFVwKHBhcmVudE5vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzZXQgY2hpbGQgY2hlY2sgc3RhdGVcclxuICAgKi9cclxuICBjb25kdWN0RG93bihub2RlOiBOelRyZWVOb2RlLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFpc0NoZWNrRGlzYWJsZWQobm9kZSkpIHtcclxuICAgICAgbm9kZS5zZXRDaGVja2VkKHZhbHVlKTtcclxuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKG4gPT4ge1xyXG4gICAgICAgIHRoaXMuY29uZHVjdERvd24obiwgdmFsdWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNlYXJjaCB2YWx1ZSAmIGV4cGFuZCBub2RlXHJcbiAgICogc2hvdWxkIGFkZCBleHBhbmRsaXN0XHJcbiAgICovXHJcbiAgc2VhcmNoRXhwYW5kKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0ID0gW107XHJcbiAgICBpZiAoIWlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB0byByZXNldCBleHBhbmRlZE5vZGVMaXN0XHJcbiAgICB0aGlzLmV4cGFuZGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIGNvbnN0IGV4cGFuZFBhcmVudCA9IChwOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgIC8vIGV4cGFuZCBwYXJlbnQgbm9kZVxyXG4gICAgICBpZiAocC5nZXRQYXJlbnROb2RlKCkpIHtcclxuICAgICAgICBwLmdldFBhcmVudE5vZGUoKS5zZXRFeHBhbmRlZCh0cnVlKTtcclxuICAgICAgICB0aGlzLnNldEV4cGFuZGVkTm9kZUxpc3QocC5nZXRQYXJlbnROb2RlKCkpO1xyXG4gICAgICAgIGV4cGFuZFBhcmVudChwLmdldFBhcmVudE5vZGUoKSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzZWFyY2hDaGlsZCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSAmJiBuLnRpdGxlLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgIC8vIG1hdGNoIHRoZSBub2RlXHJcbiAgICAgICAgbi5pc01hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0LnB1c2gobik7XHJcbiAgICAgICAgLy8gZXhwYW5kIHBhcmVudE5vZGVcclxuICAgICAgICBleHBhbmRQYXJlbnQobik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbi5pc01hdGNoZWQgPSBmYWxzZTtcclxuICAgICAgICBuLnNldEV4cGFuZGVkKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldEV4cGFuZGVkTm9kZUxpc3Qobik7XHJcbiAgICAgIH1cclxuICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGcgPT4ge1xyXG4gICAgICAgIHNlYXJjaENoaWxkKGcpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLnJvb3ROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgc2VhcmNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkcmFnIGV2ZW50XHJcbiAgICovXHJcbiAgcmVmcmVzaERyYWdOb2RlKG5vZGU6IE56VHJlZU5vZGUpOiB2b2lkIHtcclxuICAgIGlmIChub2RlLmdldENoaWxkcmVuKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIHVudGlsIHJvb3RcclxuICAgICAgdGhpcy5jb25kdWN0VXAobm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoRHJhZ05vZGUoY2hpbGQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHJlc2V0IG5vZGUgbGV2ZWxcclxuICByZXNldE5vZGVMZXZlbChub2RlOiBOelRyZWVOb2RlKTogdm9pZCB7XHJcbiAgICBpZiAobm9kZS5nZXRQYXJlbnROb2RlKCkpIHtcclxuICAgICAgbm9kZS5sZXZlbCA9IG5vZGUuZ2V0UGFyZW50Tm9kZSgpLmxldmVsICsgMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vZGUubGV2ZWwgPSAwO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmdldENoaWxkcmVuKCkpIHtcclxuICAgICAgdGhpcy5yZXNldE5vZGVMZXZlbChjaGlsZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYWxjRHJvcFBvc2l0aW9uKGV2ZW50OiBEcmFnRXZlbnQpOiBudW1iZXIge1xyXG4gICAgY29uc3QgeyBjbGllbnRZIH0gPSBldmVudDtcclxuICAgIC8vIHRvIGZpeCBmaXJlZm94IHVuZGVmaW5lZFxyXG4gICAgY29uc3QgeyB0b3AsIGJvdHRvbSwgaGVpZ2h0IH0gPSBldmVudC5zcmNFbGVtZW50ID8gZXZlbnQuc3JjRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBkZXMgPSBNYXRoLm1heChoZWlnaHQgKiB0aGlzLkRSQUdfU0lERV9SQU5HRSwgdGhpcy5EUkFHX01JTl9HQVApO1xyXG5cclxuICAgIGlmIChjbGllbnRZIDw9IHRvcCArIGRlcykge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9IGVsc2UgaWYgKGNsaWVudFkgPj0gYm90dG9tIC0gZGVzKSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZHJvcFxyXG4gICAqIDA6IGlubmVyIC0xOiBwcmUgMTogbmV4dFxyXG4gICAqL1xyXG4gIGRyb3BBbmRBcHBseSh0YXJnZXROb2RlOiBOelRyZWVOb2RlLCBkcmFnUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xyXG4gICAgaWYgKCF0YXJnZXROb2RlIHx8IGRyYWdQb3MgPiAxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhcmdldFBhcmVudCA9IHRhcmdldE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgY29uc3QgaXNTZWxlY3RlZFJvb3ROb2RlID0gdGhpcy5zZWxlY3RlZE5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgLy8gcmVtb3ZlIHRoZSBkcmFnTm9kZVxyXG4gICAgaWYgKGlzU2VsZWN0ZWRSb290Tm9kZSkge1xyXG4gICAgICBpc1NlbGVjdGVkUm9vdE5vZGUuZ2V0Q2hpbGRyZW4oKS5zcGxpY2UoaXNTZWxlY3RlZFJvb3ROb2RlLmdldENoaWxkcmVuKCkuaW5kZXhPZih0aGlzLnNlbGVjdGVkTm9kZSksIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yb290Tm9kZXMuc3BsaWNlKHRoaXMucm9vdE5vZGVzLmluZGV4T2YodGhpcy5zZWxlY3RlZE5vZGUpLCAxKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZHJhZ1Bvcykge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgdGFyZ2V0Tm9kZS5hZGRDaGlsZHJlbihbIHRoaXMuc2VsZWN0ZWROb2RlIF0pO1xyXG4gICAgICAgIHRoaXMucmVzZXROb2RlTGV2ZWwodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgLTE6XHJcbiAgICAgIGNhc2UgMTpcclxuICAgICAgICBjb25zdCB0SW5kZXggPSBkcmFnUG9zID09PSAxID8gMSA6IDA7XHJcbiAgICAgICAgaWYgKHRhcmdldFBhcmVudCkge1xyXG4gICAgICAgICAgdGFyZ2V0UGFyZW50LmFkZENoaWxkcmVuKFsgdGhpcy5zZWxlY3RlZE5vZGUgXSwgdGFyZ2V0UGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGFyZ2V0Tm9kZSkgKyB0SW5kZXgpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlLmdldFBhcmVudE5vZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0Tm9kZUxldmVsKHRoaXMuc2VsZWN0ZWROb2RlLmdldFBhcmVudE5vZGUoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gdGhpcy5yb290Tm9kZXMuaW5kZXhPZih0YXJnZXROb2RlKSArIHRJbmRleDtcclxuICAgICAgICAgIC8vIOagueiKgueCueaPkuWFpVxyXG4gICAgICAgICAgdGhpcy5yb290Tm9kZXMuc3BsaWNlKHRhcmdldEluZGV4LCAwLCB0aGlzLnNlbGVjdGVkTm9kZSk7XHJcbiAgICAgICAgICB0aGlzLnJvb3ROb2Rlc1sgdGFyZ2V0SW5kZXggXS5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICAgIHRoaXMucm9vdE5vZGVzWyB0YXJnZXRJbmRleCBdLmxldmVsID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAvLyBmbHVzaCBhbGwgbm9kZXNcclxuICAgIHRoaXMucm9vdE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgIHRoaXMucmVmcmVzaERyYWdOb2RlKGNoaWxkKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZW1pdCBTdHJ1Y3R1cmVcclxuICAgKiBldmVudE5hbWVcclxuICAgKiBub2RlXHJcbiAgICogZXZlbnQ6IE1vdXNlRXZlbnQgLyBEcmFnRXZlbnRcclxuICAgKiBkcmFnTm9kZVxyXG4gICAqL1xyXG4gIGZvcm1hdEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBub2RlOiBOelRyZWVOb2RlLCBldmVudDogTW91c2VFdmVudCB8IERyYWdFdmVudCk6IE56Rm9ybWF0RW1pdEV2ZW50IHtcclxuICAgIGNvbnN0IGVtaXRTdHJ1Y3R1cmUgPSB7XHJcbiAgICAgICdldmVudE5hbWUnOiBldmVudE5hbWUsXHJcbiAgICAgICdub2RlJyAgICAgOiBub2RlLFxyXG4gICAgICAnZXZlbnQnICAgIDogZXZlbnRcclxuICAgIH07XHJcbiAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xyXG4gICAgICBjYXNlICdkcmFnc3RhcnQnOlxyXG4gICAgICBjYXNlICdkcmFnZW50ZXInOlxyXG4gICAgICBjYXNlICdkcmFnb3Zlcic6XHJcbiAgICAgIGNhc2UgJ2RyYWdsZWF2ZSc6XHJcbiAgICAgIGNhc2UgJ2Ryb3AnOlxyXG4gICAgICBjYXNlICdkcmFnZW5kJzpcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ2RyYWdOb2RlJzogdGhpcy5nZXRTZWxlY3RlZE5vZGUoKSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnY2xpY2snOlxyXG4gICAgICBjYXNlICdkYmxjbGljayc6XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdzZWxlY3RlZEtleXMnOiB0aGlzLmdldFNlbGVjdGVkTm9kZUxpc3QoKSB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVtaXRTdHJ1Y3R1cmUsIHsgJ25vZGVzJzogdGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkubWFwKG4gPT4gbi5rZXkpIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjaGVjayc6XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdjaGVja2VkS2V5cyc6IHRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCkgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdub2Rlcyc6IHRoaXMuZ2V0Q2hlY2tlZE5vZGVMaXN0KCkgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRDaGVja2VkTm9kZUxpc3QoKS5tYXAobiA9PiBuLmtleSkgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NlYXJjaCc6XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdtYXRjaGVkS2V5cyc6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdub2Rlcyc6IHRoaXMuZ2V0TWF0Y2hlZE5vZGVMaXN0KCkgfSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdrZXlzJzogdGhpcy5nZXRNYXRjaGVkTm9kZUxpc3QoKS5tYXAobiA9PiBuLmtleSkgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2V4cGFuZCc6XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbWl0U3RydWN0dXJlLCB7ICdub2Rlcyc6IHRoaXMuZ2V0RXhwYW5kZWROb2RlTGlzdCgpIH0pO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZW1pdFN0cnVjdHVyZSwgeyAna2V5cyc6IHRoaXMuZ2V0RXhwYW5kZWROb2RlTGlzdCgpLm1hcChuID0+IG4ua2V5KSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBlbWl0U3RydWN0dXJlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19