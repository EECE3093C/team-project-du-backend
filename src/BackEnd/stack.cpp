#include <iostream>
#include <vector>

template <typename T>
class Stack {
public:
    // Constructor
    Stack() : size_(0) {}

    // Push an element onto the stack
    void push(const T& element) {
        items_.push_back(element);
        size_++;
    }

    // Pop the top element from the stack
    T pop() {
        if (size_ == 0) {
            throw std::out_of_range("Stack is empty");
        }

        const T element = items_.back();
        items_.pop_back();
        size_--;

        return element;
    }

    // Return the top element of the stack
    T& top() {
        if (size_ == 0) {
            throw std::out_of_range("Stack is empty");
        }

        return items_.back();
    }

    // Return the number of elements in the stack
    int size() const {
        return size_;
    }

    // Return true if the stack is empty, false otherwise
    bool empty() const {
        return size_ == 0;
    }

private:
    std::vector<T> items_;  // The elements in the stack
    int size_;              // The number of elements in the stack
};
