
#ifndef QUEUE_H_
#define QUEUE_H_

template<class T>
class queue
{
	private:
		T *data;
		int count;
		int front;
		int rear;
		int size;
	public:

		queue(int n);//Constructor

		void enqueue(T temp);//FUnction to insert element into queue from rear
		T dequeue();//Function to delete element from fromt
		int isEmpty();//Function to see is queue empty or not
		int isFull();//Function to see is queue full or not

		~queue();

};


#endif /* QUEUE_H_ */