// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mt-3 mb-1">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold mt-3 mb-1">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-bold mt-3 mb-1">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-bold mt-3 mb-1">{children}</h4>
    ),
    p: ({ children }) => <p className="text-base my-2">{children}</p>,
    ul: ({ children }) => (
      <ul className="list-disc list-inside my-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside my-2">{children}</ol>
    ),
    li: ({ children }) => <li className="text-base">{children}</li>,
    ...components,
  };
}
