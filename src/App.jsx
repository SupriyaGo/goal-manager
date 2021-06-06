import React, { useState, useEffect } from 'react';
import './App.css';
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } from './constants/constants';
import Airtable from "airtable"; // getting error here
const base = new Airtable( { apiKey: AIRTABLE_API_KEY } ).base( AIRTABLE_BASE_ID );

function App ()
{
  const [ count, setCount ] = useState( 0 );
  useEffect( () =>
  {
    base( 'Goals' )
      .select( { view: "Grid view" } )
      .eachPage( function page ( records, fetchNextPage )
      {
        console.log( 'records', records );
        records.forEach( function ( record )
        {
          console.log( 'Retrieved', record.get( 'Title' ) );
        } );
        fetchNextPage();

      }, function done ( err )
      {
        if ( err ) { console.error( err ); return; }
      } );

  }, [] );

  return (
    <div className="App">
      Hi..
    </div>
  );
}

export default App;
