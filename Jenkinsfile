
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'node --check server.js'
                sh 'node --check routes/index.js'
                echo 'Build checks completed successfully.'
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Deployment will be triggered through Render.'
            }
        }
    }
}
