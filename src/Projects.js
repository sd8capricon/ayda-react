import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import MyNav from "./components/Nav";
import ProjectView from "./components/ProjectView";
import Footer from "./components/Footer";
import { Container, Row } from "react-bootstrap";

function Projects() {

  const client = sanityClient({
    projectId: process.env.REACT_APP_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true
  })
  const builder = imageUrlBuilder(client)
  const urlBuilder = (source) => {
    return builder.image(source)
  }

  const [projects, setProjects] = useState([])

  useEffect(() => {
    let query = "*[_type == 'project']{_id,name,client,location,area,previewImage,images}"
    client.fetch(query).then((res) => {
      res.forEach(ele => {
        ele.previewImage = urlBuilder(ele.previewImage.asset).url()
        ele.images.forEach(ele => {
          ele.asset = urlBuilder(ele.asset).url()
        })
      })
      setProjects(res)
    })
  }, [])




  function createProject(project, key) {
    let imgList = []
    project.images.forEach(element => {
      imgList.push(element.asset)
    });
    return (
      <ProjectView
        key={key}
        project={{
          id: project._id,
          name: project.name,
          client: project.client,
          location: project.address,
          area: project.area,
          previewImg: project.previewImage
        }}
        imgs={imgList}
      />
    );
  }

  if (projects.length !== 0) {
    return (
      <div>
        <MyNav />
        <br /><br /><br />
        <Container fluid className="project-container">
          <Row md={2}>
            <>{projects.map(createProject)}</>
          </Row>
        </Container>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Projects;