pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://your-repo-url.git'
            }
        }

        stage('Backend Run') {
            steps {
                sh 'cd backend && pip install -r requirements.txt'
                sh 'cd backend && uvicorn main:app --host 0.0.0.0 --port 8000 &'
            }
        }

        stage('Frontend Run') {
            steps {
                sh 'cd frontend && npm install'
                sh 'cd frontend && npm start &'
            }
        }
    }
}
