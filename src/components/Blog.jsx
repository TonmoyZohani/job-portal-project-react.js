import React from "react";

const Blog = () => {
  return (
    <main className="w-300 mt-10 max-w-7xl mx-auto">
      <div className="text-center text-indigo-600 mb-10 font-bold text-4xl font-sans">
        React Questions and Answers
      </div>
      <div class="grid grid-cols-1 gap-4">
        <div class="mx-4 bg-white p-4 rounded-md shadow-md border border-gray-300">
          <h3 class="text-lg font-semibold mb-1">
            <span class="text-indigo-600">Question 1:</span> When should use
            Context API?
          </h3>
          <p class="font-medium mb-2">
            <span class="text-green-600">Answer:</span>
            In React, the Context API is used to get to data across the whole
            app without using prop drilling. It is mostly used when a lot of
            different components at different nesting components need to be able
            to access the same data.
          </p>
        </div>

        <div class="mx-4 bg-white p-4 rounded-md shadow-md border border-gray-300">
          <h3 class="text-lg font-semibold mb-1">
            <span class="text-indigo-600">Question 2:</span> What is Custom
            Hooks?
          </h3>
          <p class="font-medium mb-2">
            <span class="text-green-600">Answer:</span>
            In React, a Custom Hook is a function that lets developers to reuse
            code that depends on the state of more than one component. Custom
            hooks were added in as a way for components to share code without
            using render props or higher-order components. To make a custom
            hook, developers can just describe a function that uses the built-in
            React hooks like useState, useEffect, useContext, etc.
          </p>
        </div>

        <div class="mx-4 bg-white p-4 rounded-md shadow-md border border-gray-300">
          <h3 class="text-lg font-semibold mb-1">
            <span class="text-indigo-600">Question 3:</span> What is useRef in
            React?
          </h3>
          <p class="font-medium mb-2">
            In React, useRef is a mutable hook that gives developers a section
            where they can change data without affecting the React rendering
            process. This means that when developers change data in that
            section, it doesn't cause any reactivity.
          </p>
        </div>

        <div class="mx-4 bg-white p-4 rounded-md shadow-md border border-gray-300">
          <h3 class="text-lg font-semibold mb-1">
            <span class="text-indigo-600">Question 4:</span> What is useMemo
            hook?
          </h3>
          <p class="font-medium mb-2">
            <span class="text-green-600">Answer:</span>
            In React, useRef is a mutable hook that lets develpoer to change
            data without changing the way React works. This means that when they
            change data in any section, it doesn't have any effect.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
