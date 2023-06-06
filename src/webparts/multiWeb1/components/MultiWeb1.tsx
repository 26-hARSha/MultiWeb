import * as React from 'react';
//import styles from './MultiWeb1.module.scss';
import { IMultiWeb1Props } from './IMultiWeb1Props';
//import { escape } from '@microsoft/sp-lodash-subset';

export default class MultiWeb1 extends React.Component<IMultiWeb1Props, {}> {
  public render(): React.ReactElement<IMultiWeb1Props> {


    return (
      <div> <h1>First Web Part </h1><br />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quibusdam, est dolorum explicabo ipsam quidem cumque mollitia incidunt doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quibusdam, est dolorum explicabo ipsam quidem cumque mollitia incidunt doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus iure quibusdam, est dolorum explicabo ipsam quidem cumque mollitia incidunt doloribus!</p>
        <div><img src="https://rencore.com/wp/wp-content/uploads/2020/03/Farm-solutions-vs-SPFx-text2-1.png.pagespeed.ce.yciQtmu5FU.png" alt="" /></div>
        </div>
    );
  }
}

