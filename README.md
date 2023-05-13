# Local Compiler Explorer

This is a project that packages the Compiler Explorer website into a local application.

Compiler Explorer is an online compilation website that supports multiple languages and compilers. It allows you to write and compile code in your browser. This project uses Electron to package it into a desktop application so that users can use it offline.

The project address on github is: https://github.com/suifei/CompilerExplorerDesktop/ 

Licensed under the Apache 2.0 License.

## Development environment

- Node.js v10+
- Electron v8+  

## Install and run 

```bash
# Clone the repository  
git clone https://github.com/suifei/CompilerExplorerDesktop.git    

# Go to the repository directory
cd CompilerExplorerDesktop   

# Install dependencies 
npm install

# Run
npm start 
```

## Features

This local application implements the main features of the official Compiler Explorer website:

- Support for multiple programming languages: C/C++, Rust, Go, etc. 
- Support for different compilers: GCC, Clang, MSVC, etc.  
- You can load sample code or load/save code locally. 
- Code highlighting, formatting, error handling and other editor features
- Quickly compile code and view output 
- Support for different compiler options and libraries  

This project does not implement any additional functionality other than packaging. All functions are provided by the source Compiler Explorer website. 
You can upload and edit code in the app, select a programming language and compiler, set compilation options, and then click the Compile button to view the output.

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for details.

## Author information 

Author: suifei   
Email: suifei at email.com 

## Acknowledgments 

This project uses Electron to package the Compiler Explorer website. Thanks to the creator of that site, Matt Godbolt. 

Compiler Explorer website author and maintainer: Matt Godbolt

GitHub: https://github.com/mattgodbolt

If you like this website, you can sponsor it on [GitHub Sponsors](https://github.com/sponsors/mattgodbolt).

Please let me know if you have any bugs or suggestions for improvement. Contributions are also welcome. 
