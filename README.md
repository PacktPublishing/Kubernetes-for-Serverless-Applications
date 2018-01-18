# Kubernetes for Serverless Applications
This is the code repository for [Kubernetes for Serverless Applications](https://www.packtpub.com/networking-and-servers/kubernetes-serverless-applications?utm_source=github&utm_medium=repository&utm_campaign=9781788620376), published by [Packt](https://www.packtpub.com/?utm_source=github). It contains all the supporting project files necessary to work through the book from start to finish.
## About the Book
Kubernetes is often documented and approached from the perspective of someone just running software already built. Kubernetes may also be used to enhance the development process itself, enabling more consistent testing and analysis of written code so that developers can verify not only correctness, but efficiency as well. This book will introduce the key concepts of Kubernetes, linked with examples of how to deploy and use those with a bit of NodeJS and Python example code, so that a reader could quickly replicate and use that knowledge themselves in their development process.

You will begin by setting up Kubernetes for development and packaging your code to run in Kubernetes. It will walk you through the set up and installation process before working with Kubernetes in the development environment. We will then take a deep dive into concepts like automating your build process, autonomic computing, debugging, integration testing and so on. This book will cover all the necessary concepts required for any developer to work with Kubernetes. Towards the end of this book, we will be covering few security best practices which will secure the developer environment. By the end of this book, you will be in a position to use Kubernetes in the development ecosystem.
## Instructions and Navigation
All of the code is organized into folders. Each folder starts with a number followed by the application name. For example, Chapter03.



The code will look like the following:
```
apiVersion: apps/v1beta1

kind: Deployment

metadata:

    name: cli-hello-world
  
  labels:
  
      app: nginx
```

Operating Systems:
  * macOS High Sierra
  * Ubuntu 17.04
  * Windows 10 Professional

Software:
We will be installing several command-line tools throughout this book; each of the tools will have installation instructions and details of its requirements in the chapters. Note that while instructions for Windows systems are provided, a lot of the tools we will be using
were originally designed to run primarily on Linux/Unix based systems such as Ubuntu 17.04 and macOS High Sierra, and the book will favor these systems. While every effort has been made at the time of writing to verify that the tools work on Windows-based systems,
as some of the tools are experimental builds, we cannot guarantee that they will continue to work on updated systems, because of this, I would recommend using either a Linux- or Unix-based system.

Hardware:
* Windows 10 Professional and Ubuntu 17.04 system requirements:
  * Systems using processors (CPUs) launched in 2011 or later with a 1.3 GHz or faster core speed, except Intel Atom processors or AMD processors based on the Llano and Bobcat micro-architectures. 4 GB RAM minimum with 8 GB RAM or more recommended
* Apple Mac system requirements:
  * iMac: Late 2009 or newer
  * MacBook/MacBook (Retina): Late 2009 or newer
  * MacBook Pro: Mid-2010 or newer
  * MacBook Air: Late 2010 or newer
  * Mac mini: Mid-2010 or newer
  * Mac Pro: Mid-2010 or newer
* Access to at least one of the following public cloud services:
  * [AWS](https://aws.amazon.com/)
  * [Google Cloud](https://cloud.google.com/)
  * [Microsoft Azure](https://azure.microsoft.com/)
  * [DigitalOcean](https://www.digitalocean.com/)

## Related Products
* [Getting Started with Kubernetes](https://www.packtpub.com/virtualization-and-cloud/getting-started-kubernetes?utm_source=github&utm_medium=repository&utm_campaign=9781784394035)

* [DevOps with Kubernetes](https://www.packtpub.com/virtualization-and-cloud/devops-kubernetes?utm_source=github&utm_medium=repository&utm_campaign=9781788396646)

* [Introduction to Kubernetes using Docker [Video]](https://www.packtpub.com/virtualization-and-cloud/introduction-kubernetes-using-docker-video?utm_source=github&utm_medium=repository&utm_campaign=9781788998000)
