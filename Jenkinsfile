node {
    def app

    stage('Clone Repository'){
        /* Clone repo to workspace */
        checkout scm
    }

    stage('Build Image'){
        /* This builds actual image, similar to cmd: docker build */
        app = docker.build('rjanderson/digi-billing')
    }

    stage('Test Image'){
        /* Ideally tests frameworks run here */
        app.inside{
            sh 'echo "Test passed"'
        }
    }

    stage('Push Image'){
       /* Finally push do Docker Hub with 2 tags 
        * First: Incremental build number from Jenkins
        * Second: Latest tag
        * Pushing muiltiple tags is cheap as all layers are reused 
        */
        docker.withRegistry('https://registry.hub.docker.com/', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("development")
        }
    }
}