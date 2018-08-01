# ASCPI Reviewer 🙃
✨ An ASCPI reviewer web app built to demo Kubernetes.

[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/gluten-free.svg)](http://forthebadge.com)

## Instructions
1. Install [Docker](https://docs.docker.com/engine/installation/).
2. Install [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/).
3. Install [Kedge](http://kedgeproject.org/).
4. Start Minikube with `minikube start --vm-driver=xhyve`.
5. Run `eval $(minikube docker-env)` on the console.
6. Build the frontend image with `docker build -t ascpi-app frontend` on the console
7. Build the backend image with `docker build -t ascpi-api backend` on the console.
8. Create deployment and service configs with `kedge generate -f kube-backend.yaml -f kube-frontend.yaml > kube.yaml`. This will create a file called `kube.yaml`.
9. Create the deployments and services with `kubectl apply -f kube.yaml`.
10. Enable autoscaling with `kubectl apply -f autoscale.yaml`.
11. Open the backend and frontend with `minikube service api && minikube service app`. This will open a browser tab with the URLs of the backend and frontend sites.

## Resources

### Kubernetes Docs
- [Hello Minikube](https://kubernetes.io/docs/tutorials/stateless-application/hello-minikube/)
- [Running Kubernetes Locally via Minikube](https://kubernetes.io/docs/getting-started-guides/minikube/)
- [Kubernetes 101](https://kubernetes.io/docs/user-guide/walkthrough/)
- [Kubernetes 201](https://kubernetes.io/docs/user-guide/walkthrough/k8s201/)

### Interactive
- [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- [Kubernetes Playground](https://www.katacoda.com/courses/kubernetes/playground)
- [Play with Kubernetes](https://labs.play-with-k8s.com/)

### Courses
- [Scalable Microservices with Kubernetes by Google](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615)
- [Introduction to Kubernetes](https://www.edx.org/course/introduction-kubernetes-linuxfoundationx-lfs158x#)

### Github
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Kubernetes - Github Topics](https://github.com/topics/kubernetes)

### Others
- [Kubernetes - Learn Anything](https://learn-anything.xyz/programming/software-development/devops/kubernetes)