//<app-navbar></app-navbar>
// <div class="campaign">
//   <div class="page1" *ngIf="currentPage === 0">
//     <img
//       src="data:image/png;base64,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"
//     />
//     <h3>Welcome to Groupon Merchant!</h3>
//     <p>
//       Select <span style="font-weight: 600">Get started</span> to build pyur
//       campaign
//     </p>
//     <br />
//     <h3>Meet Campaign Builder</h3>
//     <p>
//       Launch your Groupon campaign in no time using Campaign Builder. Just tell
//       us what services your business offers, and we’ll help you build a campaign
//       you have full control over—customize your deal’s pricing, discounts,
//       marketing copy, photos, and more using Campaign Builder’s data-driven
//       guidance.
//     </p>
//     <div class="flex">
//       <div class="flex-items">
//         <div>
//           <h4>How long does it take?</h4>
//           <p>
//             Building a new campaign typically takes 30 minutes. After you submit
//             your campaign, we’ll review it within 1 business day.
//           </p>
//         </div>
//       </div>
//       <div class="flex-items">
//         <div>
//           <h4>What does it cost?</h4>
//           <p>There’s zero upfront cost to build a campaign.</p>
//         </div>
//       </div>
//       <div class="flex-items">
//         <div>
//           <h4>Do I need anything before I get started?</h4>
//           <div>
//             <p>
//               Have the following documents ready—you’ll need this information to
//               complete the next steps:
//             </p>
//           </div>

//           <ul>
//             <li>SSN or EIN</li>
//             <li>Photos of your business and services or goods</li>
//             <li>Licenses (depending on your business)</li>
//             <li>Payment/banking info</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div *ngIf="currentPage === 1">
//     <h3>Which category best describes you?</h3>
//     <p>Select one</p>
//     <div class="tabs">
//       <div
//         *ngFor="let tab of tabs; let i = index"
//         class="tab"
//         [ngClass]="{ active: selectedTab === i, hovered: hoveredTab === i }"
//         (click)="selectTab(i)"
//         (mouseover)="hoverTab(i)"
//         (mouseout)="hoverTab(null)"
//       >
//         <div class="tab-header">
//           {{ tab.label }}
//         </div>
//         <div class="tab-content" *ngIf="hoveredTab === i || selectedTab === i">
//           <p>{{ tab.content }}</p>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div *ngIf="currentPage === 2">
//     <h3>Which type of services do you offer</h3>
//     <p>Select all that apply</p>
//     <div *ngIf="nextClicked && selectedTab !== null">
//       <div *ngIf="selectedTabItems.length > 0">
//         <div
//           *ngFor="let item of selectedTabItems; let i = index"
//           class="tab"
//           [ngClass]="{ active: selectedItem === i, hovered: hoveredTab === i }"
//           (click)="selectItem(i)"
//           (mouseover)="hoverTab(i)"
//           (mouseout)="hoverTab(null)"
//         >
//           <div class="tab-header">
//             {{ item.name }}
//           </div>
//           <div
//             class="tab-content"
//             *ngIf="hoveredTab === i || selectedTab === i"
//           >
//             <p>{{ item.typecontent }}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <h4>Can't find a type of service</h4>
//     <p>
//       Choose <span style="font-weight: bold">Other services</span> and select
//       <span style="font-weight: bold">Next</span>
//     </p>
//     <div
//       class="tab"
//       [ngClass]="{ active: selectedOther }"
//       (click)="selectOtherTab()"
//     >
//       Other
//     </div>
//   </div>

//   <div *ngIf="currentPage === 3">
//     <h2>Add services</h2>
//     <p>
//       Select all of the services you offer. Search our full service list if
//       you’re unable to find your service listed below.
//     </p>
//     <div class="search-container">
//       <input
//         type="text"
//         [(ngModel)]="searchTerm"
//         (input)="onInputChange()"
//         placeholder="Search for services to add"
//       />
//       <ul *ngIf="showSuggestions" class="suggestions">
//         <li
//           *ngFor="let suggestion of filteredSuggestions"
//           (click)="selectSuggestion(suggestion)"
//         >
//           {{ suggestion }}
//         </li>
//       </ul>
//     </div>
//     <div id="selectedItems">
//       <div *ngFor="let selected of selectedItems" class="selected-item">
//         {{ selected }}
//       </div>
//     </div>

//     <div style="display: flex">
//       <h3>Types of services</h3>
//       <a href="javascript:void(0)" (click)="handleAddServiceClick()"
//         >+ Add another type of service</a
//       >
//     </div>
//     <div>
//       <h6>title</h6>
//       <div>item.name</div>
//     </div>
//     <a href="">Show more services</a>
//     <br />
//     <a href="">Can't find a type of service</a>
//   </div>

//   <div *ngIf="currentPage === 4">
//     <img
//       src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTg0IiBoZWlnaHQ9IjIwNCIgdmlld0JveD0iMCAwIDU4NCAyMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHk9IjE4IiB3aWR0aD0iNTg0IiBoZWlnaHQ9IjE4NiIgcng9IjE2IiBmaWxsPSIjRThGOEZGIi8+CjxtYXNrIGlkPSJtYXNrMF8zMTM2XzI0MDc4MCIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMTgiIHdpZHRoPSI1ODQiIGhlaWdodD0iMTg2Ij4KPHJlY3QgeT0iMTgiIHdpZHRoPSI1ODQiIGhlaWdodD0iMTg2IiByeD0iMTYiIGZpbGw9IiNFQUZDREUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzMxMzZfMjQwNzgwKSI+CjxjaXJjbGUgY3g9IjM4NCIgY3k9IjE3NyIgcj0iNyIgc3Ryb2tlPSIjQjhFOEZGIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iNDk3IiBjeT0iOTAiIHI9IjMxIiBzdHJva2U9IiNCOEU4RkYiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBvcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDIzLjY0MSA0NS40ODYzTDQyMC4zNyA0NC4yODcyQzQxNy4yODEgNDMuMTUzOCA0MTQuODQ2IDQwLjcxOTEgNDEzLjcxMyAzNy42Mjk4TDQxMi41MTMgMzQuMzU4N0M0MTIuMzM4IDMzLjg4MDQgNDExLjY2MSAzMy44ODA0IDQxMS40ODYgMzQuMzU4N0w0MTAuMjg3IDM3LjYyOThDNDA5LjE1NCA0MC43MTkxIDQwNi43MTkgNDMuMTUzOCA0MDMuNjMgNDQuMjg3Mkw0MDAuMzU5IDQ1LjQ4NjNDMzk5Ljg4IDQ1LjY2MTYgMzk5Ljg4IDQ2LjMzODQgNDAwLjM1OSA0Ni41MTM3TDQwMy42MyA0Ny43MTMzQzQwNi43MTkgNDguODQ2MiA0MDkuMTU0IDUxLjI4MDkgNDEwLjI4NyA1NC4zNzA3TDQxMS40ODYgNTcuNjQxM0M0MTEuNjYxIDU4LjExOTYgNDEyLjMzOCA1OC4xMTk2IDQxMi41MTMgNTcuNjQxM0w0MTMuNzEzIDU0LjM3MDdDNDE0Ljg0NiA1MS4yODA5IDQxNy4yODEgNDguODQ2MiA0MjAuMzcgNDcuNzEzM0w0MjMuNjQxIDQ2LjUxMzdDNDI0LjEyIDQ2LjMzODQgNDI0LjEyIDQ1LjY2MTYgNDIzLjY0MSA0NS40ODYzWiIgZmlsbD0iIzI5OTlGNSIvPgo8cGF0aCBvcGFjaXR5PSIwLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjM4LjU1MSA1Ni4zNTc4TDIzNC40NjMgNTQuODU5QzIzMC42MDEgNTMuNDQyMyAyMjcuNTU3IDUwLjM5ODkgMjI2LjE0MSA0Ni41MzczTDIyNC42NDIgNDIuNDQ4M0MyMjQuNDIzIDQxLjg1MDYgMjIzLjU3NyA0MS44NTA2IDIyMy4zNTggNDIuNDQ4M0wyMjEuODU5IDQ2LjUzNzNDMjIwLjQ0MiA1MC4zOTg5IDIxNy4zOTkgNTMuNDQyMyAyMTMuNTM3IDU0Ljg1OUwyMDkuNDQ5IDU2LjM1NzhDMjA4Ljg1IDU2LjU3NzEgMjA4Ljg1IDU3LjQyMjkgMjA5LjQ0OSA1Ny42NDIyTDIxMy41MzcgNTkuMTQxNkMyMTcuMzk5IDYwLjU1NzcgMjIwLjQ0MiA2My42MDExIDIyMS44NTkgNjcuNDYzNEwyMjMuMzU4IDcxLjU1MTdDMjIzLjU3NyA3Mi4xNDk0IDIyNC40MjMgNzIuMTQ5NCAyMjQuNjQyIDcxLjU1MTdMMjI2LjE0MSA2Ny40NjM0QzIyNy41NTcgNjMuNjAxMSAyMzAuNjAxIDYwLjU1NzcgMjM0LjQ2MyA1OS4xNDE2TDIzOC41NTEgNTcuNjQyMkMyMzkuMTUgNTcuNDIyOSAyMzkuMTUgNTYuNTc3MSAyMzguNTUxIDU2LjM1NzhaIiBmaWxsPSIjMjk5OUY1Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNDAuNTU3IDE3NC4zNjVMMjM5LjgzOCAxNzQuMTAxQzIzOC4wMSAxNzMuNDMxIDIzNi41NjkgMTcxLjk5IDIzNS44OTcgMTcwLjE2MUwyMzUuNjM1IDE2OS40NDNDMjM1LjQxOCAxNjguODUyIDIzNC41ODIgMTY4Ljg1MiAyMzQuMzY1IDE2OS40NDNMMjM0LjEwMyAxNzAuMTYxQzIzMy40MyAxNzEuOTkgMjMxLjk5IDE3My40MzEgMjMwLjE2MSAxNzQuMTAxTDIyOS40NDMgMTc0LjM2NUMyMjguODUyIDE3NC41ODIgMjI4Ljg1MiAxNzUuNDE3IDIyOS40NDMgMTc1LjYzNEwyMzAuMTYxIDE3NS44OTdDMjMxLjk5IDE3Ni41NjggMjMzLjQzIDE3OC4wMDkgMjM0LjEwMyAxNzkuODM3TDIzNC4zNjUgMTgwLjU1N0MyMzQuNTgyIDE4MS4xNDggMjM1LjQxOCAxODEuMTQ4IDIzNS42MzUgMTgwLjU1N0wyMzUuODk3IDE3OS44MzdDMjM2LjU2OSAxNzguMDA5IDIzOC4wMSAxNzYuNTY4IDIzOS44MzggMTc1Ljg5N0wyNDAuNTU3IDE3NS42MzRDMjQxLjE0OCAxNzUuNDE3IDI0MS4xNDggMTc0LjU4MiAyNDAuNTU3IDE3NC4zNjVaIiBmaWxsPSIjMjk5OUY1Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOTUuNzA1IDcyLjU5NzdMMzk1LjIyNSA3Mi40MjFDMzk0LjAwNyA3MS45NzE2IDM5My4wNDYgNzEuMDA0OSAzOTIuNTk4IDY5Ljc3ODZMMzkyLjQyMyA2OS4yOTdDMzkyLjI3OSA2OC45MDEgMzkxLjcyMSA2OC45MDEgMzkxLjU3NyA2OS4yOTdMMzkxLjQwMiA2OS43Nzg2QzM5MC45NTQgNzEuMDA0OSAzODkuOTkzIDcxLjk3MTYgMzg4Ljc3NCA3Mi40MjFMMzg4LjI5NSA3Mi41OTc3QzM4Ny45MDIgNzIuNzQzIDM4Ny45MDIgNzMuMzAzNCAzODguMjk1IDczLjQ0ODZMMzg4Ljc3NCA3My42MjU0QzM4OS45OTMgNzQuMDc0OCAzOTAuOTU0IDc1LjA0MTQgMzkxLjQwMiA3Ni4yNjdMMzkxLjU3NyA3Ni43NUMzOTEuNzIxIDc3LjE0NiAzOTIuMjc5IDc3LjE0NiAzOTIuNDIzIDc2Ljc1TDM5Mi41OTggNzYuMjY3QzM5My4wNDYgNzUuMDQxNCAzOTQuMDA3IDc0LjA3NDggMzk1LjIyNSA3My42MjU0TDM5NS43MDUgNzMuNDQ4NkMzOTYuMDk4IDczLjMwMzQgMzk2LjA5OCA3Mi43NDMgMzk1LjcwNSA3Mi41OTc3WiIgZmlsbD0iIzI5OTlGNSIvPgo8cGF0aCBkPSJNMjk3LjA0MyA3OS45MzA2TDI5Ny4wNDMgNzkuOTMwNkwzMjEuMDA1IDg4LjY1MjFMMjg1Ljc0NyAxODUuNTIzTDI3Ni40MzEgMTc4LjQ2OUMyNzUuODA3IDE3Ny45OTcgMjc1LjA1OSAxNzcuNzE4IDI3NC4yNzkgMTc3LjY2NkwyNzQuMTQ4IDE3OS42NjJMMjc0LjI3OSAxNzcuNjY2TDI2MS43NyAxNzYuODQzTDI5Ny4wNDMgNzkuOTMwNloiIHN0cm9rZT0iI0I4RThGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0yODIuNDM4IDg3LjQyMTlMMjgyLjQzOCA4Ny40MjE5TDMwNi40MDEgNzguNzAwNEwzNDEuNjU5IDE3NS41NzFMMzI5Ljk4OCAxNzYuMTU2QzMyOS4yMDcgMTc2LjE5NSAzMjguNDU0IDE3Ni40NjIgMzI3LjgyNCAxNzYuOTI0TDMyOS4wMDYgMTc4LjUzOEwzMjcuODI0IDE3Ni45MjRMMzE3LjcxMSAxODQuMzM0TDI4Mi40MzggODcuNDIxOVoiIHN0cm9rZT0iI0I4RThGRiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0yOTYuMTAzIDc1LjU4ODZDMjk2LjI5MiA3NS4wNjk2IDI5Ni44NjYgNzQuODAyIDI5Ny4zODUgNzQuOTkwOUwzMjEuMzQ3IDgzLjcxMjRDMzIxLjg2NiA4My45MDEzIDMyMi4xMzQgODQuNDc1MiAzMjEuOTQ1IDg0Ljk5NDFMMjg2LjY4NyAxODEuODY1QzI4Ni40NTcgMTgyLjQ5NyAyODUuNjggMTgyLjcyNiAyODUuMTQ0IDE4Mi4zMkwyNzUuODI3IDE3NS4yNjZDMjc1LjM2IDE3NC45MTIgMjc0Ljc5OCAxNzQuNzAzIDI3NC4yMTMgMTc0LjY2NEwyNjEuNzA0IDE3My44NEMyNjEuMDM5IDE3My43OTcgMjYwLjYwMiAxNzMuMTI3IDI2MC44MyAxNzIuNTAxTDI5Ni4xMDMgNzUuNTg4NloiIHN0cm9rZT0iIzI5OTlGNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0yODEuNDk5IDgzLjc2MzlDMjgxLjMxIDgzLjI0NSAyODEuNTc3IDgyLjY3MTEgMjgyLjA5NiA4Mi40ODIyTDMwNi4wNTkgNzMuNzYwN0MzMDYuNTc4IDczLjU3MTggMzA3LjE1MSA3My44Mzk0IDMwNy4zNCA3NC4zNTg0TDM0Mi41OTggMTcxLjIyOUMzNDIuODI4IDE3MS44NjEgMzQyLjM4MSAxNzIuNTM2IDM0MS43MDkgMTcyLjU3TDMzMC4wMzggMTczLjE1NUMzMjkuNDUyIDE3My4xODQgMzI4Ljg4OCAxNzMuMzg0IDMyOC40MTUgMTczLjczMUwzMTguMzAzIDE4MS4xNEMzMTcuNzY1IDE4MS41MzQgMzE3IDE4MS4zMDIgMzE2Ljc3MiAxODAuNjc2TDI4MS40OTkgODMuNzYzOVoiIHN0cm9rZT0iIzI5OTlGNSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0yOTguNyA1Mi41Njc3QzMwMC43MDIgNTEuMjQ5MiAzMDMuMjk4IDUxLjI0OTIgMzA1LjMgNTIuNTY3OEwzMTIuMTIgNTcuMDU4OEMzMTMuOTIgNTguMjQ0MiAzMTYuMDU1IDU4LjgxNjMgMzE4LjIwNyA1OC42ODk4TDMyNi4zNTggNTguMjEwM0MzMjguNzUyIDU4LjA2OTYgMzMwLjk5OSA1OS4zNjcxIDMzMi4wNzQgNjEuNTEwMkwzMzUuNzM1IDY4LjgwOTVDMzM2LjcwMSA3MC43MzYyIDMzOC4yNjQgNzIuMjk5MiAzNDAuMTkgNzMuMjY1NEwzNDcuNDkgNzYuOTI2MUMzNDkuNjMzIDc4LjAwMDkgMzUwLjkzIDgwLjI0ODMgMzUwLjc5IDgyLjY0MTdMMzUwLjMxIDkwLjc5MzNDMzUwLjE4NCA5Mi45NDUxIDM1MC43NTYgOTUuMDgwMSAzNTEuOTQxIDk2Ljg4MDNMMzU2LjQzMiAxMDMuN0MzNTcuNzUxIDEwNS43MDIgMzU3Ljc1MSAxMDguMjk4IDM1Ni40MzIgMTEwLjNMMzUxLjk0MSAxMTcuMTJDMzUwLjc1NiAxMTguOTIgMzUwLjE4NCAxMjEuMDU1IDM1MC4zMSAxMjMuMjA3TDM1MC43OSAxMzEuMzU4QzM1MC45MyAxMzMuNzUyIDM0OS42MzMgMTM1Ljk5OSAzNDcuNDkgMTM3LjA3NEwzNDAuMTkgMTQwLjczNUMzMzguMjY0IDE0MS43MDEgMzM2LjcwMSAxNDMuMjY0IDMzNS43MzUgMTQ1LjE5MUwzMzIuMDc0IDE1Mi40OUMzMzAuOTk5IDE1NC42MzMgMzI4Ljc1MiAxNTUuOTMgMzI2LjM1OCAxNTUuNzlMMzE4LjIwNyAxNTUuMzFDMzE2LjA1NSAxNTUuMTg0IDMxMy45MiAxNTUuNzU2IDMxMi4xMiAxNTYuOTQxTDMwNS4zIDE2MS40MzJDMzAzLjI5OCAxNjIuNzUxIDMwMC43MDIgMTYyLjc1MSAyOTguNyAxNjEuNDMyTDI5MS44OCAxNTYuOTQxQzI5MC4wOCAxNTUuNzU2IDI4Ny45NDUgMTU1LjE4NCAyODUuNzkzIDE1NS4zMUwyNzcuNjQyIDE1NS43OUMyNzUuMjQ4IDE1NS45MyAyNzMuMDAxIDE1NC42MzMgMjcxLjkyNiAxNTIuNDlMMjY4LjI2NSAxNDUuMTkxQzI2Ny4yOTkgMTQzLjI2NCAyNjUuNzM2IDE0MS43MDEgMjYzLjgwOSAxNDAuNzM1TDI1Ni41MSAxMzcuMDc0QzI1NC4zNjcgMTM1Ljk5OSAyNTMuMDcgMTMzLjc1MiAyNTMuMjEgMTMxLjM1OEwyNTMuNjkgMTIzLjIwN0MyNTMuODE2IDEyMS4wNTUgMjUzLjI0NCAxMTguOTIgMjUyLjA1OSAxMTcuMTJMMjQ3LjU2OCAxMTAuM0MyNDYuMjQ5IDEwOC4yOTggMjQ2LjI0OSAxMDUuNzAyIDI0Ny41NjggMTAzLjdMMjUyLjA1OSA5Ni44ODAzQzI1My4yNDQgOTUuMDgwMSAyNTMuODE2IDkyLjk0NTEgMjUzLjY5IDkwLjc5MzNMMjUzLjIxIDgyLjY0MTdDMjUzLjA3IDgwLjI0ODMgMjU0LjM2NyA3OC4wMDA5IDI1Ni41MSA3Ni45MjYxTDI2My44MDkgNzMuMjY1NEMyNjUuNzM2IDcyLjI5OTIgMjY3LjI5OSA3MC43MzYyIDI2OC4yNjUgNjguODA5NUwyNzEuOTI2IDYxLjUxMDJDMjczLjAwMSA1OS4zNjcxIDI3NS4yNDggNTguMDY5NiAyNzcuNjQyIDU4LjIxMDNMMjg1Ljc5MyA1OC42ODk4QzI4Ny45NDUgNTguODE2MyAyOTAuMDggNTguMjQ0MiAyOTEuODggNTcuMDU4OEwyOTguNyA1Mi41Njc3WiIgZmlsbD0iI0U4RjhGRiIgc3Ryb2tlPSIjQjhFOEZGIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTI5OC4xNSA0Ny43MzI2QzMwMC40ODYgNDYuMTk0MiAzMDMuNTE0IDQ2LjE5NDIgMzA1Ljg1IDQ3LjczMjZMMzEyLjY3IDUyLjIyMzZDMzE0LjI5IDUzLjI5MDUgMzE2LjIxMSA1My44MDU0IDMxOC4xNDggNTMuNjkxNUwzMjYuMyA1My4yMTIxQzMyOS4wOTIgNTMuMDQ3OSAzMzEuNzE0IDU0LjU2MTcgMzMyLjk2OCA1Ny4wNjE5TDMzNi42MjggNjQuMzYxMkMzMzcuNDk4IDY2LjA5NTMgMzM4LjkwNSA2Ny41MDE5IDM0MC42MzkgNjguMzcxNUwzNDcuOTM4IDcyLjAzMjJDMzUwLjQzOCA3My4yODYxIDM1MS45NTIgNzUuOTA4MSAzNTEuNzg4IDc4LjcwMDRMMzUxLjMwOSA4Ni44NTIxQzM1MS4xOTUgODguNzg4NiAzNTEuNzA5IDkwLjcxMDEgMzUyLjc3NiA5Mi4zMzAzTDM1Ny4yNjcgOTkuMTUwMUMzNTguODA2IDEwMS40ODYgMzU4LjgwNiAxMDQuNTE0IDM1Ny4yNjcgMTA2Ljg1TDM1Mi43NzYgMTEzLjY3QzM1MS43MDkgMTE1LjI5IDM1MS4xOTUgMTE3LjIxMSAzNTEuMzA5IDExOS4xNDhMMzUxLjc4OCAxMjcuM0MzNTEuOTUyIDEzMC4wOTIgMzUwLjQzOCAxMzIuNzE0IDM0Ny45MzggMTMzLjk2OEwzNDAuNjM5IDEzNy42MjhDMzM4LjkwNSAxMzguNDk4IDMzNy40OTggMTM5LjkwNSAzMzYuNjI4IDE0MS42MzlMMzMyLjk2OCAxNDguOTM4QzMzMS43MTQgMTUxLjQzOCAzMjkuMDkyIDE1Mi45NTIgMzI2LjMgMTUyLjc4OEwzMTguMTQ4IDE1Mi4zMDlDMzE2LjIxMSAxNTIuMTk1IDMxNC4yOSAxNTIuNzA5IDMxMi42NyAxNTMuNzc2TDMwNS44NSAxNTguMjY3QzMwMy41MTQgMTU5LjgwNiAzMDAuNDg2IDE1OS44MDYgMjk4LjE1IDE1OC4yNjdMMjkxLjMzIDE1My43NzZDMjg5LjcxIDE1Mi43MDkgMjg3Ljc4OSAxNTIuMTk1IDI4NS44NTIgMTUyLjMwOUwyNzcuNyAxNTIuNzg4QzI3NC45MDggMTUyLjk1MiAyNzIuMjg2IDE1MS40MzggMjcxLjAzMiAxNDguOTM4TDI2Ny4zNzIgMTQxLjYzOUMyNjYuNTAyIDEzOS45MDUgMjY1LjA5NSAxMzguNDk4IDI2My4zNjEgMTM3LjYyOEwyNTYuMDYyIDEzMy45NjhDMjUzLjU2MiAxMzIuNzE0IDI1Mi4wNDggMTMwLjA5MiAyNTIuMjEyIDEyNy4zTDI1Mi42OTEgMTE5LjE0OEMyNTIuODA1IDExNy4yMTEgMjUyLjI5MSAxMTUuMjkgMjUxLjIyNCAxMTMuNjdMMjQ2LjczMyAxMDYuODVDMjQ1LjE5NCAxMDQuNTE0IDI0NS4xOTQgMTAxLjQ4NiAyNDYuNzMzIDk5LjE1MDFMMjUxLjIyNCA5Mi4zMzAzQzI1Mi4yOTEgOTAuNzEwMSAyNTIuODA1IDg4Ljc4ODYgMjUyLjY5MSA4Ni44NTIxTDI1Mi4yMTIgNzguNzAwNEMyNTIuMDQ4IDc1LjkwODEgMjUzLjU2MiA3My4yODYxIDI1Ni4wNjIgNzIuMDMyMkwyNjMuMzYxIDY4LjM3MTVDMjY1LjA5NSA2Ny41MDE5IDI2Ni41MDIgNjYuMDk1MyAyNjcuMzcyIDY0LjM2MTJMMjcxLjAzMiA1Ny4wNjE5QzI3Mi4yODYgNTQuNTYxNyAyNzQuOTA4IDUzLjA0NzkgMjc3LjcgNTMuMjEyMUwyODUuODUyIDUzLjY5MTVDMjg3Ljc4OSA1My44MDU0IDI4OS43MSA1My4yOTA1IDI5MS4zMyA1Mi4yMjM2TDI5OC4xNSA0Ny43MzI2WiIgZmlsbD0iI0U4RjhGRiIgc3Ryb2tlPSIjMjk5OUY1IiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMzAyIiBjeT0iMTAzIiByPSIzOSIgZmlsbD0iI0ZGQzEyMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0zMDAuMTk1IDg0Ljc4MjdDMzAwLjkxOSA4My4yNjQ1IDMwMy4wODEgODMuMjY0NSAzMDMuODA1IDg0Ljc4MjdMMzA3Ljg2OSA5My4yOTkxQzMwOC4xNiA5My45MTAxIDMwOC43NDEgOTQuMzMyMiAzMDkuNDEzIDk0LjQyMDdMMzE4Ljc2OCA5NS42NTM5QzMyMC40MzYgOTUuODczNyAzMjEuMTAzIDk3LjkyOTEgMzE5Ljg4MyA5OS4wODcyTDMxMy4wNCAxMDUuNTg0QzMxMi41NDkgMTA2LjA1IDMxMi4zMjcgMTA2LjczMyAzMTIuNDUgMTA3LjM5OUwzMTQuMTY4IDExNi42NzdDMzE0LjQ3NCAxMTguMzMxIDMxMi43MjYgMTE5LjYwMiAzMTEuMjQ4IDExOC43OTlMMzAyLjk1NCAxMTQuMjk4QzMwMi4zNTkgMTEzLjk3NSAzMDEuNjQxIDExMy45NzUgMzAxLjA0NiAxMTQuMjk4TDI5Mi43NTIgMTE4Ljc5OUMyOTEuMjc0IDExOS42MDIgMjg5LjUyNiAxMTguMzMxIDI4OS44MzIgMTE2LjY3N0wyOTEuNTUgMTA3LjM5OUMyOTEuNjczIDEwNi43MzMgMjkxLjQ1MSAxMDYuMDUgMjkwLjk2IDEwNS41ODRMMjg0LjExNyA5OS4wODcyQzI4Mi44OTcgOTcuOTI5MSAyODMuNTY0IDk1Ljg3MzcgMjg1LjIzMiA5NS42NTM5TDI5NC41ODcgOTQuNDIwN0MyOTUuMjU5IDk0LjMzMjIgMjk1Ljg0IDkzLjkxMDEgMjk2LjEzMSA5My4yOTkxTDMwMC4xOTUgODQuNzgyN1oiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9Ijc4IiBjeT0iMTYyIiByPSI4IiBzdHJva2U9IiNCOEU4RkYiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxMzgiIGN5PSIyMDQiIHI9IjMxIiBzdHJva2U9IiNCOEU4RkYiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxMTgiIGN5PSI4MCIgcj0iNSIgc3Ryb2tlPSIjQjhFOEZGIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iNTQ3IiBjeT0iMjMiIHI9IjExIiBzdHJva2U9IiNCOEU4RkYiIHN0cm9rZS13aWR0aD0iMiIvPgo8L2c+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzc3LjQ2MSAxNy4yMjk0TDM3Mi41NTYgMTUuNDMwOEMzNjcuOTIyIDEzLjczMDcgMzY0LjI2OSAxMC4wNzg3IDM2Mi41NyA1LjQ0NDcyTDM2MC43NyAwLjUzNzk5N0MzNjAuNTA3IC0wLjE3OTMzMiAzNTkuNDkyIC0wLjE3OTMzMiAzNTkuMjI5IDAuNTM3OTk3TDM1Ny40MyA1LjQ0NDcyQzM1NS43MyAxMC4wNzg3IDM1Mi4wNzggMTMuNzMwNyAzNDcuNDQ0IDE1LjQzMDhMMzQyLjUzOSAxNy4yMjk0QzM0MS44MiAxNy40OTI1IDM0MS44MiAxOC41MDc1IDM0Mi41MzkgMTguNzcwNkwzNDcuNDQ0IDIwLjU3QzM1Mi4wNzggMjIuMjY5MyAzNTUuNzMgMjUuOTIxMyAzNTcuNDMgMzAuNTU2MUwzNTkuMjI5IDM1LjQ2MkMzNTkuNDkyIDM2LjE3OTMgMzYwLjUwNyAzNi4xNzkzIDM2MC43NyAzNS40NjJMMzYyLjU3IDMwLjU1NjFDMzY0LjI2OSAyNS45MjEzIDM2Ny45MjIgMjIuMjY5MyAzNzIuNTU2IDIwLjU3TDM3Ny40NjEgMTguNzcwNkMzNzguMTggMTguNTA3NSAzNzguMTggMTcuNDkyNSAzNzcuNDYxIDE3LjIyOTRaIiBmaWxsPSIjRkZDMTIwIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjA3LjY0MSA4OS40ODYzTDIwNC4zNyA4OC4yODcyQzIwMS4yODEgODcuMTUzOCAxOTguODQ2IDg0LjcxOTEgMTk3LjcxMyA4MS42Mjk4TDE5Ni41MTMgNzguMzU4N0MxOTYuMzM4IDc3Ljg4MDQgMTk1LjY2MSA3Ny44ODA0IDE5NS40ODYgNzguMzU4N0wxOTQuMjg3IDgxLjYyOThDMTkzLjE1NCA4NC43MTkxIDE5MC43MTkgODcuMTUzOCAxODcuNjMgODguMjg3MkwxODQuMzU5IDg5LjQ4NjNDMTgzLjg4IDg5LjY2MTYgMTgzLjg4IDkwLjMzODQgMTg0LjM1OSA5MC41MTM3TDE4Ny42MyA5MS43MTMzQzE5MC43MTkgOTIuODQ2MiAxOTMuMTU0IDk1LjI4MDkgMTk0LjI4NyA5OC4zNzA3TDE5NS40ODYgMTAxLjY0MUMxOTUuNjYxIDEwMi4xMiAxOTYuMzM4IDEwMi4xMiAxOTYuNTEzIDEwMS42NDFMMTk3LjcxMyA5OC4zNzA3QzE5OC44NDYgOTUuMjgwOSAyMDEuMjgxIDkyLjg0NjIgMjA0LjM3IDkxLjcxMzNMMjA3LjY0MSA5MC41MTM3QzIwOC4xMiA5MC4zMzg0IDIwOC4xMiA4OS42NjE2IDIwNy42NDEgODkuNDg2M1oiIGZpbGw9IiNGRkMxMjAiLz4KPC9zdmc+Cg=="
//     />
//     <div>
//       <h4>You added services!</h4>
//       <p>Select <b>Continue</b> to build a campaign.</p>
//     </div>
//   </div>

//   <footer class="fixed-footer">
//     <button class="prev" (click)="previous()" [disabled]="currentPage === 0">
//       Previous
//     </button>
//     <button
//       class="next"
//       (click)="next()"
//       [disabled]="currentPage === totalPages - 1"
//     >
//       Next
//     </button>
//   </footer>
// </div>

// TS:
// tabs = [
//   {
//     label: 'Health, beauty & wellness',
//     content: 'Spas, Salons, Gyms, Doctors, Alternative medicine, etc.',
//     types: [
//       {
//         id: 1,
//         name: 'Med spa services',
//         typecontent:
//           'Laser hair removal, Microblading, Non-surgical facelifts, etc.',
//       },
//       {
//         id: 2,
//         name: 'Spa services',
//         typecontent: 'Body wraps, Saunas, Float tanks, Salt caves, etc.',
//       },
//       {
//         id: 3,
//         name: 'Massage services',
//         typecontent: 'Deep tissue, Hot stone, Reflexology, etc.',
//       },
//       {
//         id: 4,
//         name: 'Nail services',
//         typecontent: 'Mani-pedi, No-chip, Nail design, etc.',
//       },
//       {
//         id: 5,
//         name: 'Brow & lash services',
//         typecontent: 'Eyebrow shaping and tinting, Eyelash extensions, etc.',
//       },
//     ],
//   },
//   {
//     label: 'Things to do',
//     content: 'Events, Activities, Classes, etc.',
//     types: [
//       {
//         id: 1,
//         name: 'Skills & training workshops',
//         typecontent:
//           'Dance classes, Horseback riding, Trade skills, Resume writing, etc.',
//       },
//       {
//         id: 2,
//         name: 'Education',
//         typecontent:
//           'Academic courses, Certifications, Driver’s education, Firearm safety, etc.',
//       },
//       {
//         id: 3,
//         name: 'Events & festivals',
//         typecontent:
//           'Beer and wine festivals, Conventions, Food and drink exhibitions, etc.',
//       },
//       {
//         id: 4,
//         name: 'Indoor activities',
//         typecontent:
//           'Arcades, Bowling, Trampolines, Climbing walls, Room-escape games, etc.',
//       },
//       {
//         id: 5,
//         name: 'Sports activities',
//         typecontent:
//           'Golf, Paintball, Shooting ranges, Skydiving, Off-roading, etc.',
//       },
//     ],
//   },
//   {
//     label: 'Home & auto',
//     content: 'Automotive services, Home services, Pet care, etc.',
//     types: [
//       {
//         id: 1,
//         name: 'Car enhancements & repair',
//         typecontent: 'Brake pads, Window tinting, Remote starters, etc.',
//       },
//       {
//         id: 2,
//         name: 'Car maintenance',
//         typecontent:
//           'Oil changes, Wheel alignments, Inspections, Emissions testing, etc.',
//       },
//       {
//         id: 3,
//         name: 'Car wash',
//         typecontent: 'Exterior washes, Detailing, Wax and polish, etc.',
//       },
//       {
//         id: 4,
//         name: 'Entertainment rentals',
//         typecontent: 'DJ equipment, Catering, Photo booths, etc.',
//       },
//       {
//         id: 5,
//         name: 'Exterior home services',
//         typecontent:
//           'Landscaping, Window cleaning, Pressure washing, Pest control, Paving, etc.',
//       },
//     ],
//   },
//   {
//     label: 'Restaurants',
//     content: 'Dine-in, Takeout, Delivery, etc.',
//     types: [
//       {
//         id: 1,
//         name: 'American food',
//         typecontent:
//           'Pub grub, New American, Pizza, Burgers, Steakhouses, etc.',
//       },
//       {
//         id: 2,
//         name: 'International food',
//         typecontent: 'Italian, Mexican, Sushi, Indian, etc.',
//       },
//       {
//         id: 3,
//         name: 'Quick service',
//         typecontent: 'Cafes, Sandwich shops, Ice cream parlors, etc.',
//       },
//     ],
//   },
//   {
//     label: 'Retail',
//     content: 'Storefronts, Online shopping, Online services, etc.',
//     types: [
//       {
//         id: 1,
//         name: 'eLearning',
//         typecontent: 'Online courses and certifications, etc.',
//       },
//       {
//         id: 2,
//         name: 'Photography',
//         typecontent: 'Photoshoots, etc.',
//       },
//       {
//         id: 3,
//         name: 'Personal services',
//         typecontent:
//           'Meal prep delivery, Online consulting, Online tarot and psychic readings, etc.',
//       },
//       {
//         id: 4,
//         name: 'Online retail shopping',
//         typecontent: 'Shopping on a website, etc.',
//       },
//       {
//         id: 5,
//         name: 'Consulting Services',
//         typecontent:
//           'Financial/tax consultant, counselor/therapist, marketing consultant, etc.',
//       },
//     ],
//   },
// ];
