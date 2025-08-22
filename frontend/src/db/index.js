import {v4 as uuid } from 'uuid'
export const revisionDSA = [
  {
    ProblemStatement: "Sort a dataset efficiently using the most optimal technique for the given data size and nature.",
    Approach: [
      "We analyze the dataset to determine patterns before choosing the appropriate sorting technique. This ensures we avoid unnecessary complexity and achieve the desired time efficiency.",
      "If the dataset is large and mostly sorted, we opt for algorithms like Insertion Sort to leverage its efficiency in nearly sorted scenarios."
    ],
    DataStructure: ["Array", "Heap", "Linked List"],
    Algo: ["Merge Sort", "Insertion Sort"]
  },
  {
    ProblemStatement: "Detect cycles in a graph using an efficient traversal method.",
    Approach: [
      "To detect cycles in a graph, we traverse nodes using depth-first search (DFS) and keep track of visited nodes in a set for efficient lookup.",
      "When a node is encountered that is already in the recursion stack, we conclude that a cycle exists."
    ],
    DataStructure: ["Graph (Adjacency List)", "Stack"],
    Algo: ["Depth First Search", "Cycle Detection"]
  },
  {
    ProblemStatement: "Preprocess numeric data to enable constant-time range sum queries.",
    Approach: [
      "We preprocess numeric data into prefix sums to allow constant-time range sum queries.",
      "This significantly improves performance for frequent queries over large datasets."
    ],
    DataStructure: ["Array", "Matrix"],
    Algo: ["Prefix Sum", "Sliding Window"]
  },
  {
    ProblemStatement: "Efficiently fetch the smallest element from a stream of data.",
    Approach: [
      "We utilize a min-heap to efficiently fetch the smallest element in streaming data.",
      "This is useful for scenarios like top-k element problems."
    ],
    DataStructure: ["Heap", "Priority Queue"],
    Algo: ["Heap Sort", "Top-K Elements"]
  },
  {
    ProblemStatement: "Search for an element in a sorted array in the most efficient way.",
    Approach: [
      "We apply binary search on sorted arrays to reduce the search space by half each iteration.",
      "It works best when the data is static and sorted beforehand."
    ],
    DataStructure: ["Array"],
    Algo: ["Binary Search", "Lower Bound"]
  },
  {
    ProblemStatement: "Identify connected components in an undirected graph.",
    Approach: [
      "To detect connected components in a graph, we use DFS or BFS.",
      "Each traversal marks all reachable nodes from a given source."
    ],
    DataStructure: ["Graph (Adjacency List)"],
    Algo: ["Depth First Search", "Breadth First Search"]
  },
  {
    ProblemStatement: "Efficiently count character frequencies in a string.",
    Approach: [
      "We store frequency of characters in a hash map for quick lookups.",
      "This supports algorithms that require counting occurrences efficiently."
    ],
    DataStructure: ["Hash Map"],
    Algo: ["Hashing", "Counting"]
  },
  {
    ProblemStatement: "Find pairs in a sorted array that satisfy a condition.",
    Approach: [
      "We use a two-pointer technique to solve problems involving pairs in sorted arrays.",
      "This is effective for problems like two-sum in sorted arrays."
    ],
    DataStructure: ["Array"],
    Algo: ["Two Pointers"]
  },
  {
    ProblemStatement: "Find the shortest path in a weighted graph.",
    Approach: [
      "For shortest path in weighted graphs, Dijkstra’s algorithm is applied using a priority queue.",
      "We update distances to nodes greedily based on minimal path cost so far."
    ],
    DataStructure: ["Graph (Adjacency List)", "Priority Queue"],
    Algo: ["Dijkstra's Algorithm"]
  },
  {
    ProblemStatement: "Manage disjoint sets and detect cycles in undirected graphs.",
    Approach: [
      "We use Union-Find data structure to manage disjoint sets.",
      "It is particularly useful for detecting cycles in undirected graphs and Kruskal's MST algorithm."
    ],
    DataStructure: ["Disjoint Set"],
    Algo: ["Union Find", "Path Compression"]
  },
  {
    ProblemStatement: "Optimize solutions for problems with overlapping subproblems.",
    Approach: [
      "Dynamic programming is used to store solutions to subproblems.",
      "This avoids recomputation and drastically improves performance in overlapping subproblem scenarios."
    ],
    DataStructure: ["Array"],
    Algo: ["Dynamic Programming", "Memoization"]
  },
  {
    ProblemStatement: "Find all possible solutions for a problem using backtracking.",
    Approach: [
      "We use backtracking to explore all possibilities for problems like N-Queens.",
      "Pruning invalid branches early improves performance."
    ],
    DataStructure: ["Matrix"],
    Algo: ["Backtracking"]
  }
];

export const dsasheetdata = [{
  _id: uuid(),
  name: 'shaik dsa sheet-1',
  problems: [
    { probname: "word ladder 1", link: "www.leetcode.com" },
    { probname: "word ladder 2", link: "www.leetcode.com" }
  ]
},
{  _id: uuid(),
  name: 'shaik dsa sheet-2',
  problems: [
    { probname: "word ladder 1", link: "www.leetcode.com" },
    { probname: "word ladder 2", link: "www.leetcode.com" }
  ]
}
,
{  _id: uuid(),
  name: 'shaik dsa sheet-2',
  problems: [
    { probname: "word ladder 1", link: "www.leetcode.com" },
    { probname: "word ladder 2", link: "www.leetcode.com" }
  ]
}
]