import React, { useState, useRef, useEffect, useCallback } from "react";
import { Component as ParentToChild } from "./component/parent-to-child/Component";
import { Component as ChildToParent } from "./component/child-to-parent/Component";
import { Component as SiblingToSibling } from "./component/sibling-to-sibling/Component";
import { Component as ParentToGrandchild } from "./component/parent-to-grandchild/Component";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="example-container">
        <p>Parent to Child</p>
        <ParentToChild />
      </div>
      <div className="example-container">
        <p>Child to Parent</p>
        <ChildToParent />
      </div>
      <div className="example-container">
        <p>Sibling to Sibling</p>
        <SiblingToSibling />
      </div>
      <div className="example-container">
        <p>Parent to Grandchild</p>
        <ParentToGrandchild />
      </div>
    </div>
  );
}

export default App;
