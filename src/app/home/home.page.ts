import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ApolloQueryResult } from 'apollo-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: gql`
        query allUsers {
          getAllUsers {
            id,
            email,
            first_name,
            last_name
          }
        }
      `,
    })
    .valueChanges.subscribe((result: ApolloQueryResult<any> ) => {
      console.log(result);
    });
}

}
