import React, { useContext, useEffect } from "react"
import { connect } from "react-redux"

import _ from "lodash"

import { addAnnotation } from "../../actions/index"
import { VideoChatContext } from "./videoChatContext"

function Annotations(props) {
  const context = useContext(VideoChatContext)
  const { annotations, addAnnotation } = context
  const { message, addNewNote } = props
  const words = ["tosse", "espirro", "dor de cabeça", "dor de garganta", "vitamina c"]
  const images = {
    tosse: "https://conteudo.imguol.com.br/c/entretenimento/2a/2020/03/24/tosse-de-maneira-correta-1585055081033_v2_615x300.jpg",
    espirro: "https://upload.wikimedia.org/wikipedia/commons/7/77/Sneeze.JPG",
    "dor de cabeça": "https://brasilianeuroclinica.com.br/wp-content/uploads/2019/08/dor-de-cabeca-brasilia-neuro-clinica.jpg",
    "dor de garganta": "https://blog.valda.com.br/wp-content/uploads/2019/06/06_17-blog_valda_capa_garganta.png",
    "vitamina c": "https://drogariaspacheco.vteximg.com.br/arquivos/ids/618449-500-500/bio--c--zinco-1000mg-uniao-quimica-30-comprimidos-efervescente-Pacheco-654175.jpg?v=637194976490670000",
  }

  useEffect(() => {
    console.log("message: ", message)
    // const words = ["tosse", "espirro", "dor de cabeça", "dor de garganta", "vitamina c"]
    // const images = {
    //   tosse: "https://conteudo.imguol.com.br/c/entretenimento/2a/2020/03/24/tosse-de-maneira-correta-1585055081033_v2_615x300.jpg",
    //   espirro: "ttps://upload.wikimedia.org/wikipedia/commons/7/77/Sneeze.JPG",
    //   "dor de cabeça": "https://brasilianeuroclinica.com.br/wp-content/uploads/2019/08/dor-de-cabeca-brasilia-neuro-clinica.jpg",
    //   "dor de garganta": "https://blog.valda.com.br/wp-content/uploads/2019/06/06_17-blog_valda_capa_garganta.png",
    //   "vitamina c": "https://drogariaspacheco.vteximg.com.br/arquivos/ids/618449-500-500/bio--c--zinco-1000mg-uniao-quimica-30-comprimidos-efervescente-Pacheco-654175.jpg?v=637194976490670000",
    // }
    words.forEach((value, index) => {
      if (!_.isEmpty(message.toLowerCase().match(value))) {
        const ann = { id: value, image: images[value] }
        addAnnotation(value)
        addNewNote(ann)
      }
    })
  }, [])

  return (
    <div style={{
      position: "absolute", bottom: "8%", right: "7%", display: "grid",
    }}
    >
      {annotations.map((value) => (
        <div style={{ display: "inline-grid" }}>
          <img
            src={images[value]}
            style={{
              height: 90, width: 140, borderRadius: 10, marginTop: 10,
            }}
          />
          <div style={{
            marginTop: -25, background: "rgba(0, 0, 0, 0.6)", zIndex: 10, color: "white", borderRadius: 5, fontWeight: "bold", textAlign: "center",
          }}
          >
            {value}
          </div>
        </div>
      ))}
      {/* {annotations.includes("tosse")
      && (
      <div style={{ display: "inline-grid" }}>
        <img
          src="https://conteudo.imguol.com.br/c/entretenimento/2a/2020/03/24/tosse-de-maneira-correta-1585055081033_v2_615x300.jpg"
          style={{
            height: 90, width: 140, borderRadius: 10, marginTop: 10,
          }}
        />
        <div style={{
          marginTop: -25, background: "rgba(0, 0, 0, 0.6)", zIndex: 10, color: "white", borderRadius: 5, fontWeight: "bold", textAlign: "center",
        }}
        >
          Tosse
        </div>
      </div>
      )}
      {annotations.includes("espirro")
      && (
      <div style={{ display: "inline-grid" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Sneeze.JPG"
          style={{
            height: 90, width: 140, borderRadius: 10, marginTop: 10,
          }}
        />
        <div style={{
          marginTop: -25, background: "rgba(0, 0, 0, 0.6)", zIndex: 10, color: "white", borderRadius: 5, fontWeight: "bold", textAlign: "center",
        }}
        >
          Espirro
        </div>
      </div>
      )}
      {annotations.includes("dor de cabeça")
      && (
      <div style={{ display: "inline-grid" }}>
        <img
          src="https://brasilianeuroclinica.com.br/wp-content/uploads/2019/08/dor-de-cabeca-brasilia-neuro-clinica.jpg"
          style={{
            height: 90, width: 140, borderRadius: 10, marginTop: 10,
          }}
        />
        <div style={{
          marginTop: -25, background: "rgba(0, 0, 0, 0.6)", zIndex: 10, color: "white", borderRadius: 5, fontWeight: "bold", textAlign: "center",
        }}
        >
          Dor de cabeça
        </div>
      </div>
      )}
      {annotations.includes("dor de garganta")
      && (
      <div style={{ display: "inline-grid" }}>
        <img
          src="https://blog.valda.com.br/wp-content/uploads/2019/06/06_17-blog_valda_capa_garganta.png"
          style={{
            height: 90, width: 140, borderRadius: 10, marginTop: 10,
          }}
        />
        <div style={{
          marginTop: -25, background: "rgba(0, 0, 0, 0.6)", zIndex: 10, color: "white", borderRadius: 5, fontWeight: "bold", textAlign: "center",
        }}
        >
          Dor de garganta
        </div>
      </div>
      )}
      {annotations.includes("vitamina c")
      && (
      <div style={{ display: "inline-grid" }}>
        <img
          src="https://drogariaspacheco.vteximg.com.br/arquivos/ids/618449-500-500/bio--c--zinco-1000mg-uniao-quimica-30-comprimidos-efervescente-Pacheco-654175.jpg?v=637194976490670000"
          style={{
            height: 90, width: 140, borderRadius: 10, marginTop: 10,
          }}
        />
        <div style={{
          marginTop: -25, background: "rgba(0, 0, 0, 0.6)", zIndex: 10, color: "white", borderRadius: 5, fontWeight: "bold", textAlign: "center",
        }}
        >
          Vitamina C
        </div>
      </div>
      )} */}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addNewNote: (value) => {
    dispatch(addAnnotation(value))
  },
})

export default connect(null, mapDispatchToProps)(Annotations)
