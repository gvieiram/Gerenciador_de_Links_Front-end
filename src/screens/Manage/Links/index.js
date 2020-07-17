import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layouts/Manage';


const Links = () => {
  return (
    <Layout>
      {/* Menu Links - Adicionar */}
      <div className="row">
        <div className="col">
          <h1>Links</h1>  
        </div>
        <div className="col text-right align-self-bottom pt-2">
          <Link to="/manage/links/create" className="btn btn-primary">
            Adicionar
          </Link>
        </div>
      </div>
      {/* Tela de links */}
        <div className="pb-2 pt-2 pl3 pr-3 d-flex flex-row justify-content-between">
          <div className="pr-3"><img src="https://via.placeholder.com/100" alt="Link icon"/></div>
            <div className="align-self-center">
            <span className="text-primary clearfix">Item Label</span>
          <span className="text-primary clearfix">Item Url</span>
          </div>
          <div className="ml-auto p-2 clearfix">
            <span>Editar</span>
            <span>Deletar</span>
          </div>
        </div>
        <div className="pb-2 pt-2 pl3 pr-3 d-flex flex-row justify-content-between">
          <div className="pr-3"><img src="https://via.placeholder.com/100" alt="Link icon"/></div>
            <div className="align-self-center">
            <span className="text-primary clearfix">Item Label</span>
          <span className="text-primary clearfix">Item Url</span>
          </div>
          <div className="ml-auto p-2 clearfix">
            <span>Editar</span>
            <span>Deletar</span>
          </div>
        </div>
        <div className="pb-2 pt-2 pl3 pr-3 d-flex flex-row justify-content-between">
          <div className="pr-3"><img src="https://via.placeholder.com/100" alt="Link icon"/></div>
            <div className="align-self-center">
            <span className="text-primary clearfix">Item Label</span>
          <span className="text-primary clearfix">Item Url</span>
          </div>
          <div className="ml-auto p-2 clearfix">
            <span>Editar</span>
            <span>Deletar</span>
          </div>
        </div>
    </Layout>
  );
};

export default Links;