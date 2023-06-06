import * as React from 'react';
//import styles from './MultWeb2.module.scss';
import { IMultWeb2Props } from './IMultWeb2Props';
//import { escape } from '@microsoft/sp-lodash-subset';

export default class MultWeb2 extends React.Component<IMultWeb2Props, {}> {
  public render(): React.ReactElement<IMultWeb2Props> {
   
    return (
      <div> <h1>Second Web Part </h1><br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quibusdam, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quibusdam, est dolorum explicabo ipsam quidem cumque mollitia incidunt doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quibusdam, est dolorum explicabo ipsam quidem cumque mollitia incidunt doloribus!est dolorum explicabo ipsam quidem cumque mollitia incidunt doloribus!</p>
        <div><img src="https://zehntech.com/wp-content/uploads/2022/07/SPFx-WebParts.jpg" alt="" /></div>
        </div>
    );
  }
}
