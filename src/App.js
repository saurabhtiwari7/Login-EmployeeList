import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Newsapi from './Newsapi';
import Pagination from './Pagination';
import './api.png';
import SearchBar from './SearchBar';
class App extends Component {
 
  state = {
    posts: [],
    currTime: new Date().toLocaleString(),
    currentPage: 1,
    postsPerPage: 10,
    // searchField:''
}

    

componentDidMount() {

    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-04-11&sortBy=publishedAt&apiKey=6109346afd364c538a4b723e0adc77a4')
      .then( response => {
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
       const SlicePosts = response.data.articles.slice(indexOfFirstPost, indexOfLastPost);
        this.setState({posts: SlicePosts});
      console.log(response.data.articles);
      });
      
  }

 

  render () {
     // Search Bar
    // const {title, searchField} = this.state
    // const filteredLists = title.filter(lists => (
    //   lists.Newsapi.toLowerCase().includes(searchField.toLowerCase())
    // ))
   const paginate = (pageNumber) => this.setState( {currentPage: pageNumber } )

 
    const posts = Array.isArray(this.state.posts) && this.state.posts.map( (post, index) => {
       return <Newsapi id={index} key={index} author={post.author} source={post.source.name} image='api.png' url={post.url} title={post.title} date={this.state.currTime} />
    });
    return (



    
    <div>
   <SearchBar placeholder='Enter country name' handleChange={(e) => this.setState({searchField: e.target.value})} />
    <table className="table table-dark">
     <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Source</th>
      <th scope="col">Author</th>
      <th scope="col">title</th>
      <th scope="col">Date</th>
      <th scope="col">URL</th>
    </tr>
  </thead>
   {posts}
   </table>
 <Pagination totalPosts={posts.length} postsPerPage={this.state.postsPerPage} paginate={paginate.bind(this)}  />
    </div>
    );
  }
}
 


export default App;
