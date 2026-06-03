node {

    stage('Clone Repo') {
        git branch: 'master', url: 'https://github.com/CG-Anjumol/test-deploy.git'
    }

    stage('Backend Setup') {
        dir('backend') {
            bat 'pip install -r requirements.txt'
        }
    }

    stage('Run Backend') {
        dir('backend') {
            bat '''
            taskkill /F /IM uvicorn.exe || echo not running
            start /B uvicorn main:app --host 0.0.0.0 --port 8001
            exit 0
            '''
        }
    }

    stage('Frontend Setup') {
        dir('frontend') {
            bat 'npm install'
        }
    }

    stage('Run Frontend') {
        dir('frontend') {
            bat '''
            taskkill /F /IM node.exe || echo not running
            start /B npm start
            exit 0
            '''
        }
    }
}
