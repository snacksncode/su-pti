# su-pti
Front-End part of SU site created for school's needs 


## Building

**Dockerinzing:**
`docker build -t su-pti .`
`docker run -v ~/su-pti_data:/app/public -p 3000:3000 -d --restart=always su-pti`

**Normal build:**
`yarn install`
`yarn build`
`yarn start`