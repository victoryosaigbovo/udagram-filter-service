http://localhost:3000/filteredimage?image_url=https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg


http://starterapp-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg


https://github.com/victoryosaigbovo/udagram-filter-service

![npm run dev](https://user-images.githubusercontent.com/106165464/173455732-d537fba6-9891-48c2-afce-e700c96a47c4.png)
![eb init](https://user-images.githubusercontent.com/106165464/173455806-7814aba0-dc4c-48c8-b7fb-804f47433c94.png)
![eb create](https://user-images.githubusercontent.com/106165464/173455836-59f8539e-150b-4fe0-b9ec-eca70735057d.png)
![eb deploy](https://user-images.githubusercontent.com/106165464/173455885-1155c1d2-16f3-4bd9-a58b-6d39aafb2486.png)
![Valid local request](https://user-images.githubusercontent.com/106165464/173455925-f1bba301-bf41-4157-8807-1d9065f71c7f.png)
![Successful_responses_have_a_200_code](https://user-images.githubusercontent.com/106165464/173455993-3bca6823-dbe4-4c3b-9a0b-a54e643b7059.png)
![at_least_one_error_code_for_caught_errors](https://user-images.githubusercontent.com/106165464/173456020-f570bd07-e023-4cfe-a08a-0b4bf0f29d30.png)
![Elastic_Beanstalk_Endpoint_GET_request](https://user-images.githubusercontent.com/106165464/173456044-b97818fd-8eea-4b25-b83b-36da9bff512c.png)
 file:///home/victory/Pictures/EB_GET_request.png




# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

## Tasks

### Setup Node Environment

You'll need to create a new node server. Open a new terminal within the project directory and run:

1. Initialize a new project: `npm i`
2. run the development server with `npm run dev`

### Create a new endpoint in the server.ts file

The starter code has a task for you to complete an endpoint in `./src/server.ts` which uses query parameter to download an image from a public URL, filter the image, and return the result.

We've included a few helper functions to handle some of these concepts and we're importing it for you at the top of the `./src/server.ts`  file.

```typescript
import {filterImageFromURL, deleteLocalFiles} from './util/util';
```

### Deploying your system

Follow the process described in the course to `eb init` a new application and `eb create` a new environment to deploy your image-filter service! Don't forget you can use `eb deploy` to push changes.

## Stand Out (Optional)

### Refactor the course RESTapi

If you're feeling up to it, refactor the course RESTapi to make a request to your newly provisioned image server.

### Authentication

Prevent requests without valid authentication headers.
> !!NOTE if you choose to submit this, make sure to add the token to the postman collection and export the postman collection file to your submission so we can review!

### Custom Domain Name

Add your own domain name and have it point to the running services (try adding a subdomain name to point to the processing server)
> !NOTE: Domain names are not included in AWS’ free tier and will incur a cost.
