import React, { useEffect, useState } from "react";
import ItemDetail from  './ItemDetail';
import {useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {getDoc, doc, getFirestore} from "firebase/firestore"
import "../../Main.css"

const ItemDetailContainer=()=>{
    const [loading, setLoading] = useState(false);
    const {id}= useParams();
    const [detalleEstado, setDetalleEstado]= useState ({});

    const db = getFirestore();
    const docRef=doc(db, "items", `${id}`);

 useEffect(()=>{
    setLoading(true);   
    getDoc(docRef).then ((snapshot)=>{
    setDetalleEstado( {id: snapshot.id, ...snapshot.data()});
    setLoading(false);})
    
    
    } ,[id]);
    if (loading) return <Loading />;

 return(
    <div>
        <div>
            <ItemDetail item={detalleEstado}/>
        </div>
    </div>
   )
}
export default ItemDetailContainer


