node {

    stage('Clone Repo') {
        git branch: 'master', url: 'https://github.com/CG-Anjumol/test-deploy.git'
    }

    stage('Backend Setup') {
        dir('backend') {
            bat 'pip install -r requirements.txt'
        }
    }

    stage('Frontend Setup') {
        dir('frontend') {
            bat 'npm install'
        }
    }

    stage('Build Frontend') {
        dir('frontend') {
            bat 'npm run build'
        }
    }
}