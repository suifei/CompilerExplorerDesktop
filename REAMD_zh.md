# Local Compiler Explorer

这是一个将Compiler Explorer网站打包成本地应用的项目。

Compiler Explorer是一个在线编译网站,支持多种语言和编译器,可以在浏览器中编写和编译代码。这个项目使用Electron将其打包成本地桌面应用,让用户离线使用。

该项目地址在github上:https://github.com/suifei/CompilerExplorerDesktop/ 

采用Apache 2.0开源协议。

## 开发环境

- Node.js v10+
- Electron v8+  

## 安装和运行  

```bash
# 克隆仓库   
git clone https://github.com/suifei/CompilerExplorerDesktop.git    

# 进入仓库目录   
cd CompilerExplorerDesktop     

# 安装依赖  
npm install  

# 运行   
npm start  
```

## 功能  

这个本地应用实现了Compiler Explorer官网的主要功能:   

 - 支持多种编程语言:C/C++, Rust, Go等 
 - 支持不同编译器:GCC, Clang, MSVC等    
 - 可以加载范例代码或者从本地加载/保存代码  
 - 代码高亮,格式化,错误处理等编辑器功能  
 - 快速编译代码并查看输出结果  
 - 支持不同的编译选项和库     

这个项目没有实现除打包外的任何额外功能,所有的功能均由源网站Compiler Explorer提供。  

你可以在应用中上传和编辑代码,选择编程语言和编译器,设置编译选项,然后单击编译按钮查看结果输出。   

## 许可证

该项目采用Apache 2.0开源协议。详情请查看[LICENSE](LICENSE)文件。

## 作者信息 

作者:suifei   
邮箱:suifei at email.com 

## 致谢 

该项目使用Electron将Compiler Explorer网站打包,在此致谢该网站的创建者Matt Godbolt。  

Compiler Explorer网站的作者和维护者:Matt Godbolt

GitHub:https://github.com/mattgodbolt 

如果喜欢这个网站,可以通过[GitHub Sponsors](https://github.com/sponsors/mattgodbolt) 进行赞助。

欢迎指出任何bug或者提出改进意见。也欢迎贡献代码。 
