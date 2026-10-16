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

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                withCredentials([string(
                    credentialsId: 'render_deploy_hook',
                    variable: 'RENDER_DEPLOY_HOOK'
                )]) {
                    sh 'curl --fail --silent --show-error -X POST "$RENDER_DEPLOY_HOOK"'
                }
            }
        }
    }
    post {
        failure {
            emailext(
                to: 'kipropcollins81@gmail.com',
                subject: "FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """The Jenkins pipeline has failed.

Job: ${env.JOB_NAME}
Build: #${env.BUILD_NUMBER}
Console: ${env.BUILD_URL}console
"""
            )
        }
    }
}
