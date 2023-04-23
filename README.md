# MacroDawn 


**MacroDawn** is a modern web application for fitness enthusiasts looking to explore different exercises for different muscle groups, as part of the  [cloud-native napptive](https://wemakedevs.org/events/hackathons/napptive#register)

Throughout this project, we utilized a variety of tools and technologies, including ReactJS, MUI, Rapid API for development, And Docker, Github automations for uploading Docker images, NAPPTIVE for deployment.

## Run this project locally:

1. Clone the repository

```bash
git clone https://github.com/HubGenixx/BangTigada
```


2. Change directory 

```bash
cd BangTigada
```


3. Install dependencies 

```bash
npm install --legacy-peer-deps
```

4. Run project

```bash
npm start
```

### Run using Docker image:

1. Clone the repository
```bash
git clone https://github.com/HubGenixx/BangTigada
```
2. Build the Docker image
```bash 
docker build -t macrodawn .
```
3. Run the Docker container locally
```bash
docker run -d --name marcodawncon macrodawn
```
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

**_NOTE:_**  Make sure to get your own api-key from Rapid api documentation given below and paste it in ./src/utils/fetchData.js 
### This project uses [Rapid API](https://rapidapi.com/hub). Visit [ExerciseDB API Documentation](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/) to know more.


## Deployment chart
![image](https://user-images.githubusercontent.com/72307121/232183825-e9d090c6-ff7d-499c-a7a1-66e9bb083443.png)


```
MIT License

Copyright (c) 2023 BangTidaga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```





