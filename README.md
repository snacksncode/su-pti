# su-pti
Front-End part of SU site created for school's needs 


## Building

**Dockerinzing:**

`docker build -t su-pti .`

`docker run -v ~/su-pti_data:/app/public -p 3000:3000 -d --restart=always su-pti`

**__Now folder `~/su-pti_data` is publicly accesible, `data.json` updates automatically, anything uploaded to it requires container to be restarted.__**



**Normal build:**

`yarn install`

`yarn build`

`yarn start`