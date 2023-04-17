
#ifndef GRAPH_H_
#define GRAPH_H_

struct user
{
	char name[20]={};
	struct dob
	{
		int date=0;
		int month=0;
		int year=0;
	}birthdate;
	int commentCount=0;
};


class graph
{
	struct arc;

	struct vertex
	{
		vertex* pNextVertex;
		user data;
		int inDegree;
		int outDegree;
		arc* pArc;
		int processed;
	};

	struct arc
	{
		vertex* destinition;
		arc* pNextArc;
	};

	int count;
	vertex* first;

	public:
	graph();

	void insertVertex(user);
	int insertEdge(char[],char[]);
	int deleteVertex(user);
	int deleteEdge(char[],char[]);
	int depthFirstTraversal(user*,char[],int);
	int breadthFirstTraversal(user*,int);
	int process(vertex*,char[],int);
	int isEdgePresent(char[],char[]);
	virtual ~graph();
};

#endif /* GRAPH_H_ */