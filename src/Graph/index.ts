interface AdjacencyList {
  [node: string]: string[];
}

export class GraphNode {
  data: any;
  edges: GraphNode[];

  constructor(data: any) {
    this.data = data;
    this.edges = [];
  }
}

export class Graph {
  adjacencyList: AdjacencyList;
  undirected: boolean;

  constructor(undirected: boolean = false) {
    this.adjacencyList = {};
    this.undirected = undirected;
  }

  addVertex(vertex: string): void {
    this.adjacencyList[vertex] = [];
  }

  addEdge(source: string, destination: string): void {
    // Connect two nodes by an edge
    this.adjacencyList[source].push(destination);
    // If undirected, create a reciprocal edge
    if (this.undirected) {
      this.adjacencyList[destination].push(source);
    }
  }

  removeVertex(vertex: string): void {
    delete this.adjacencyList[vertex];

    Object.keys(this.adjacencyList).forEach((node) => {
      this.adjacencyList[node] = this.adjacencyList[node].filter(
        (v) => v !== vertex
      );
    });
  }
}
