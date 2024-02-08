import React, { Component } from "react";
import { NewsItem } from "./components";

export class newsComponent extends Component {
  articles = [
    {
      source: {
        id: "abc-news-au",
        name: "ABC News (AU)",
      },
      author: null,
      title:
        "Australia Women v South Africa Women - South Africa Women in Australia 2024, 2nd ODI - Cricket Score Centre - ABC News",
      description:
        "Follow live cricket scores for Australia Women v South Africa Women. Stay updated on the latest match results in the South Africa Women in Australia 2024 with the ABC News Cricket Score Centre.",
      url: "https://www.abc.net.au/news/sport/score-centre/cricket/2024-02-07/auw-saw/57500",
      urlToImage:
        "https://live-production.wcms.abc-cdn.net.au/1e2294b09eda2b20b970dc3516af67cb?impolicy=wcms_crop_resize&cropH=2512&cropW=4466&xPos=167&yPos=0&width=1200&height=675",
      publishedAt: "2024-02-07T07:37:14.0155005Z",
      content: null,
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    // This constructor function gets executed whenever there is a object that is being created from the parent class
    super();
    // We can use the constructor to set the state of the objects
    this.state = {
      articles: this.articles,
    };
  }
  render() {
    return (
      <section className="">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.url}
                  title={element.title}
                  description="news of today"
                  imageURL="https://live-production.wcms.abc-cdn.net.au/1e2294b09eda2b20b970dc3516af67cb?impolicy=wcms_crop_resize&cropH=2512&cropW=4466&xPos=167&yPos=0&width=1200&height=675"
                  newsURL=""
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default newsComponent;
