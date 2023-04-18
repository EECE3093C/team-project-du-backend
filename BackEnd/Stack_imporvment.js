class Complex {
  constructor(real, imag = 0) {
    this.real = real;
    this.imag = imag;
  }

  add(other) {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }

  subtract(other) {
    return new Complex(this.real - other.real, this.imag - other.imag);
  }

  multiply(other) {
    const real = this.real * other.real - this.imag * other.imag;
    const imag = this.real * other.imag + this.imag * other.real;
    return new Complex(real, imag);
  }

  divide(other) {
    const denom = other.real ** 2 + other.imag ** 2;
    const real = (this.real * other.real + this.imag * other.imag) / denom;
    const imag = (this.imag * other.real - this.real * other.imag) / denom;
    return new Complex(real, imag);
  }

  magnitude() {
    return Math.sqrt(this.real ** 2 + this.imag ** 2);
  }

  phase() {
    return Math.atan2(this.imag, this.real);
  }
}

function fft(signal) {
  // Check if the signal length is a power of 2
  if (signal.length & (signal.length - 1)) {
    throw new Error("Signal length must be a power of 2");
  }

  // Create a stack to hold the signal and frequency domain representation
  const stack = [];

  // Push the signal onto the stack as an array of complex numbers
  stack.push(signal.map((x) => new Complex(x)));

  // Perform the FFT using a stack-based approach
  while (stack.length > 0) {
    const input = stack.pop();

    // Base case: if the input length is 1, return the input
    if (input.length === 1) {
      stack.push(input);
      continue;
    }

    // Divide the input signal into two halves
    const even = [];
    const odd = [];
    for (let i = 0; i < input.length; i += 2) {
      even.push(input[i]);
      odd.push(input[i + 1]);
    }

    // Recursively apply the FFT to each half
    stack.push(even);
    stack.push(odd);
  }

  // TODO: Combine the results using complex exponential functions
  return stack.pop();
}
