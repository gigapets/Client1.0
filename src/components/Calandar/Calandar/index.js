// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'

// // Setup the localizer by providing the moment (or globalize) Object
// // to the correct localizer.
// const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

// const Calendar extends React.Component {
//       <div>
//     <BigCalendar
//       localizer={localizer}
//       events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//     />
//   </div>

// export default Calandar;




// index.search({
//     query: 'query',
//     filters: 'date_timestamp:1538352000000 TO 1540944000000'
// });
  
// "title": "For better school projects, a partnership with GitHub",
// "author": "Jessica West",
// "excerpt": "Hello GitHubbers and Algolians alike! We have some exciting news we’d like to share with you. Algolia is so pleased to announce that we have partnered with GitHub’s Student Developer Pack to help students build search functionality into their projects freely and effortlessly 🎉.",
// "date": "2018-09-18"
// }
// ]
// Algolia can handle filtering on date, as long as you format them properly. This means you first need to transform your date attribute into Unix timestamps, as numeric values.

// After#
// Before we can filter on date, we need to add the date as a Unix timestamp. We don’t have to remove or change date; instead, we can add a date_timestamp attribute with the proper format.

// Note that this attribute needs to be a numeric value for Algolia to be able to sort on it.

// [
// {
// "title": "Algolia's Global Roadshow",
// "author": "Ryan Chen",
// "excerpt": "We've heard it from experts, industry surveys, and our most successful customers: search and discovery are key to moving the digital conversation forward.",
// "date": "2018-10-17",
// "date_timestamp": 1539734400
// },


// Date Range

// <DatePicker
//     selected={this.state.startDate}
//     selectsStart
//     startDate={this.state.startDate}
//     endDate={this.state.endDate}
//     onChange={this.handleChangeStart}
// />

// <DatePicker
//     selected={this.state.endDate}
//     selectsEnd
//     startDate={this.state.startDate}
//     endDate={this.state.endDate}
//     onChange={this.handleChangeEnd}
// />
// 02/08/2014
// 02/10/2014



// formats date
// <td>{customer.firstSale.toLocaleDateString()}</td>