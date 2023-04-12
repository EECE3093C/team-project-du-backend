#ifndef FACEBOOK_H_
#define FACEBOOK_H_
#include "graph.h"

class facebook
{
	graph g;
	int totalUser;

	public:
	facebook();

	void setdata();
	void login(char[]);
	void findFriend(user,char[],int);
	void maxComment();
	void maxFriends();

	virtual ~facebook();
};

#endif /* FACEBOOK_H_ */
