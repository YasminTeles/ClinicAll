import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

import { TextAnalyticsClient, AzureKeyCredential } from "@azure/ai-text-analytics"
import {
  Button, Avatar, Paper, Card, CardMedia, CardContent, Link,
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import AttachFileIcon from "@material-ui/icons/AttachFile"
import _ from "lodash"

import receita from "../assets/Receita_Med.pdf"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Male from "../components/ReactHumanBody/Male"

const styles = {
  root: {
    textTransform: "none",
    borderRadius: 55,
    fontFamily: "Mulish",
    color: "white",
    backgroundColor: "#096262",
    marginTop: 60,
    height: 40,
    marginLeft: 20,
    "&:hover": {
      backgroundColor: "#13BADE",
      fontWeight: "bold",
    },
  },
}

function Review(props) {
  const [schedule, setScheduled] = useState(false)
  const [currentKeyWords, setKeyWords] = useState([])
  const [ann, setAnn] = useState([])
  const {
    currentUser, currentDoctor, humanBody, keyWords, pain, annotations, classes,
  } = props
  const key = "83200d7334d4496180aaca4d6ffa9ddb"
  const endpoint = "https://clinicall.cognitiveservices.azure.com/"

  useEffect(() => {
    const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key))
    textAnalyticsClient.extractKeyPhrases([keyWords]).then((result) => {
      setKeyWords(result[0].keyPhrases)
    })

    if (_.isEmpty(annotations)) {
      setAnn([{
        id: "tosse",
        image: "https://conteudo.imguol.com.br/c/entretenimento/2a/2020/03/24/tosse-de-maneira-correta-1585055081033_v2_615x300.jpg",
      },
      {
        id: "febre",
        image: "https://oparana.com.br/wp-content/uploads/2019/03/6-febre-1132x670.jpg",
      },
      {
        id: "dor de cabeça",
        image: "https://brasilianeuroclinica.com.br/wp-content/uploads/2019/08/dor-de-cabeca-brasilia-neuro-clinica.jpg",
      },
      {
        id: "dor de garganta",
        image: "https://blog.valda.com.br/wp-content/uploads/2019/06/06_17-blog_valda_capa_garganta.png",
      },
      {
        id: "vitamina c",
        image: "https://drogariaspacheco.vteximg.com.br/arquivos/ids/618449-500-500/bio--c--zinco-1000mg-uniao-quimica-30-comprimidos-efervescente-Pacheco-654175.jpg?v=637194976490670000",

      },
      ])
    } else {
      setAnn(annotations)
    }
  }, [])

  return (
    <div>
      <Header />
      <h1 style={{ marginLeft: 50, marginTop: 30 }}>
        Resumo da sua consulta
      </h1>
      <div style={{ fontSize: 18, marginLeft: 50 }}>
        Plano Unimed
      </div>
      <div style={{ display: "flex" }}>
        <Paper
          elevation={0}
          variant="outlined"
          style={{
            display: "flex", marginLeft: 50, borderRadius: 20, height: 80, width: "20%", justifyContent: "space-evenly", marginTop: 40,
          }}
        >
          <Avatar src={currentDoctor.avatar} alt={currentDoctor.name} style={{ height: 60, width: 60, marginTop: "3%" }} />
          <div style={{ fontSize: 20, marginTop: "9%", fontWeight: 500 }}>{currentDoctor.name}</div>
        </Paper>
        <Button variant="contained" classes={classes} disableElevation onClick={() => setScheduled(true)}>
          Marcar revisão
        </Button>
      </div>
      <div style={{
        fontSize: 22, marginLeft: 50, fontWeight: "bold", marginTop: 60,
      }}
      >
        Palavras-chaves
      </div>
      <div style={{ display: "flex", marginLeft: 50, marginTop: 20 }}>
        <div style={{ display: "flex" }}>
          { currentKeyWords.map((keyWord) => (
            <Paper
              elevation={0}
              style={{
                marginRight: 8, backgroundColor: "rgba(0, 0, 0, 0.6)", color: "white", fontSize: 12, padding: 5, textAlign: "center",
              }}
            >
              <Link href={`https://www.gov.br/acessoainformacao/pt-br/@@search?SearchableText=${keyWord}`} style={{ color: "white" }}>
                {keyWord}
              </Link>
            </Paper>
          ))}
        </div>
      </div>
      <div style={{
        fontSize: 22, marginLeft: 50, fontWeight: "bold", marginTop: 60,
      }}
      >
        Dores
      </div>
      <div>
        <Male parts={humanBody} />
      </div>
      <div style={{ display: "flex", marginTop: -40, marginLeft: 60 }}>
        <div style={{ marginTop: 5, marginRight: 20, fontSize: 20 }}>Nível de dor: </div>
        <div style={{
          backgroundColor: "#096262", color: "white", width: 40, minWidth: 40, borderRadius: 20, textAlign: "center", fontSize: 24,
        }}
        >
          {pain}
        </div>
      </div>
      <div style={{
        fontSize: 22, marginLeft: 50, fontWeight: "bold", marginTop: 60,
      }}
      >
        Imagens
      </div>
      <div style={{ display: "flex", marginLeft: 50, marginTop: 20 }}>
        {ann.map((annotation) => (
          <div style={{ display: "inline-grid", marginRight: 20 }}>
            <img
              src={annotation.image}
              style={{
                height: 90, width: 140, borderRadius: 10, marginTop: 10,
              }}
            />
            <div style={{
              marginTop: -25, background: "rgba(0, 0, 0, 0.6)", zIndex: 10, color: "white", borderRadius: 5, fontWeight: "bold", textAlign: "center",
            }}
            >
              {annotation.id}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        fontSize: 22, marginLeft: 50, fontWeight: "bold", marginTop: 60,
      }}
      >
        Prescrição
      </div>
      <div style={{ marginTop: 20 }}>
        <a href={receita} download style={{ marginLeft: 50 }}>
          <AttachFileIcon />
          {" "}
          Receita_Medica.pdf
        </a>
      </div>
      <div style={{
        fontSize: 16, marginLeft: 50, marginTop: 30,
      }}
      >
        Remédios contidos na receita médica
      </div>
      <div style={{
        display: "flex", marginLeft: 50, marginTop: 20, marginBottom: 120,
      }}
      >
        {["Vitamina C"].map((medicine) => (
          <Card
            variant="outlined"
            elevation={0}
            style={{ width: 220, borderRadius: 20 }}
            onClick={() => (window.location = `https://busca.drogaraia.com.br/search?w=${medicine}`)}
          >
            <CardMedia
              style={{ height: 120 }}
              image="https://drogariaspacheco.vteximg.com.br/arquivos/ids/618449-500-500/bio--c--zinco-1000mg-uniao-quimica-30-comprimidos-efervescente-Pacheco-654175.jpg?v=637194976490670000"
              title={medicine}
            />
            <CardContent>
              <div style={{ fontWeight: "bold" }}>
                {medicine}
              </div>
              <div style={{ fontWeight: "bold", marginTop: 10 }}>
                R$ 29,60
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
      {schedule && <Redirect to={{ pathname: "/doctor" }} />}
    </div>
  )
}

export default connect((store) => {
  console.log("store: ", store)
  return ({
    currentUser: store.user,
    currentDoctor: store.doctor,
    humanBody: store.humanBody,
    keyWords: store.keyWords,
    pain: store.pain,
    annotations: store.annotations,
  })
})(withStyles(styles)(Review))
