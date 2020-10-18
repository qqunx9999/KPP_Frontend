<h1>KU People</h1>
  
  <p>KU People is the web application project for Kasetsart University</p>
  
 <h2>Installation</h2>
 
  <h4>Before run the app please install node modules for each folders first, go to the folder and type <code>npm install</code></h4>
  
  <ol>
    <li>Install via git : <code>git clone https://github.com/qqunx9999/KUPEOPLE_FULLSTACK.git</code> at the destination folder</li><br>
    <li>Go to the folder and Install adminmongo : <code>git clone https://github.com/mrvautin/adminMongo.git</code> or direct to his site at <a href="https://github.com/mrvautin/adminMongo">Here</a>
      <ul>
        <li>go to adminmongo project and type <code>npm start</code> or <code>node app</code>
      </ul>
    </li><br>
    <li>In frontend part we use <a href="https://reactjs.org/">React</a> (Javascripts library) for building user interface, this is how to use.
      <ul>
        <li>go to frontend project and type <code>npm start</code> in command line</li>
        <li>List of addittional library that you need to install
          <ul>
            <li>react bootstrap : <code>npm install react-bootstrap bootstrap</code></li>
            <li>formik form : <code>npm install --save formik</code></li>
          </ul>
        </li>
      </ul>
    </li><br>
    <li>In backend part we use <a href="https://nestjs.com/">Nestjs</a> (server-side application framework) for building application, this is how to use
      <ul>
        <li>go to backend project and type <code>npm rum start</code> in command line</li>
        <li>List of additional library that you need to install
          <ul>
            <li><a href="https://typeorm.io/#/">typeorm</a> : <code>npm install --save @nestjs/typeorm typeorm</code></li>
            <li>nest mongodb : <code>npm install -save-dev @types/mongodb mongodb</code></li>
            <li>class-validator and class-transformer : <code>npm i --save class-validator class-transformer</code></li>
            <li>nest passport <br>
              <code>npm install --save @nestjs/passport passport passport-local</code> <br>
              <code>npm install --save-dev @types/passport-local</code> <br>
              <code>npm install --save @nestjs/jwt passport-jwt</code> <br>
              <code>npm install --save-dev @types/passport-jwt</code>
            </li>
          </uL>
        </li>
      </ul>
    </li><br>
  </ol>
  
  <h5>Other description is in backend/frontend's readme </h5>
