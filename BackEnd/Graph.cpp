#include <iostream>
#include <vector>
#include <cstdlib>
#include <stack>
#include <queue>


using namespace std;


struct GraphNode
{
    int key;
    GraphNode* next;
    GraphNode(int key = 0)
    {
        this->key = key;
        this->next = NULL;
    }
};

class Graph
{
    private:
        int Vert;
        GraphNode* Adjlist;
        int vertices_visited[];

    public:
        Graph(int input_list[])
        {
            this->Vert = input_list[0];
            this->Adjlist = new GraphNode[Vert];
            this->vertices_visited[Vert];
            int i = 0;
            for(i; i < Vert; i++)
            {
                Adjlist[i] = NULL;
                vertices_visited[i] = 0;
            }

            i = 1;
            while(input_list[i] != -1)
            {
                CreateEdge(input_list[i], input_list[i+1]);
                i += 2;
            }
            

        }

        ~Graph()
        {
            int i = 0;
            GraphNode* edge = this->Adjlist[0];
            GraphNode* temp;
            for(i; i < Vert; i++)
            {
                while(edge != NULL)
                {
                    temp = edge;
                    edge = edge->next;
                    delete temp;
                    temp = NULL;
                }
            }

        }

        void CreateEdge(int begin, int end)
        {
            GraphNode* newEdgeNode = new GraphNode(end);
            newEdgeNode->next = Adjlist[begin];
            Adjlist[begin] = newEdgeNode;
            
            newEdgeNode = new GraphNode(begin);
            newEdgeNode->next = Adjlist[end];
            Adjlist[end] = newEdgeNode;

        }

        void PrintGraph()
        {
            int vertex = 0;
            GraphNode* edge;
            for(vertex; vertex < Vert; vertex++)
            {
                cout << "Vertex: " << vertex << endl;
                edge = Adjlist[vertex];
                while(edge != NULL)
                {
                    cout << edge->key << "->";
                    edge = edge->next;
                }
                cout << "\n";

            }

        }
    

};


const int INF = numeric_limits<int>::max(); // "Infinity" value

// Graph edge class
class Edge {
public:
    int to, weight;

    Edge(int to, int weight) {
        this->to = to;
        this->weight = weight;
    }
};

// Dijkstra's algorithm function
vector<int> dijkstra(vector<vector<Edge>>& graph, int start) {
    vector<int> dist(graph.size(), INF); // Distance from start to each node
    dist[start] = 0; // Distance from start to itself is 0

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq; // Priority queue of nodes to visit
    pq.push(make_pair(0, start)); // Add start node to queue with distance 0

    while (!pq.empty()) {
        pair<int, int> top = pq.top();
        pq.pop();
        int u = top.second;
        int d = top.first;
        if (d > dist[u]) {
            continue; // Skip this node if its distance has already been updated
        }
        for (Edge e : graph[u]) {
            int v = e.to;
            int alt = dist[u] + e.weight;
            if (alt < dist[v]) {
                dist[v] = alt; // Update distance to this node if it is shorter than the current distance
                pq.push(make_pair(dist[v], v)); // Add this node to the queue
            }
        }
    }

    return dist;
}




int main()
{
    int testing[12] = {5,0,1,1,4,2,3,1,3,3,4,-1};
    Graph gph(testing);
    gph.PrintGraph();

    return 0;
}
