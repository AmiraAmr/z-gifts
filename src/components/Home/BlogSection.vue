<template>
  <b-container>
    <div class="blog">
      <h3>Latest from blog</h3>

      <b-row gap="2px" align-h="center">
        <b-col lg="3" md="4" sm="6" v-for="blog in blogs" :key="blog.index">
          <b-row>
            <b-col>
              <div class="blog-container">
                <div class="blog-image">
                  <img :src="blog.image" :alt="blog.title" />
                </div>
                <div class="description">
                  <div class="title">{{ blog.title }}</div>
                  <div class="date-container">
                    <b-row align-v="center">
                      <b-col cols="3">
                        <svg
                          data-name="calendar (3)"
                          xmlns="http://www.w3.org/2000/svg"
                          width="33.135"
                          height="33.135"
                          viewBox="0 0 33.135 33.135"
                        >
                          <g data-name="Group 3027">
                            <g data-name="Group 3026">
                              <ellipse
                                data-name="Ellipse 39"
                                cx=".783"
                                cy="1.174"
                                rx=".783"
                                ry="1.174"
                                transform="translate(24.265 12.524)"
                              />
                              <path
                                data-name="Path 3147"
                                d="M27.958 2.589h-1.683V1.294a1.294 1.294 0 0 0-2.589 0v1.295H17.8V1.294a1.294 1.294 0 1 0-2.589 0v1.295H9.384V1.294a1.294 1.294 0 1 0-2.589 0v1.295H5.177A5.183 5.183 0 0 0 0 7.766v20.192a5.183 5.183 0 0 0 5.177 5.177h9.9a1.294 1.294 0 1 0 0-2.589h-9.9a2.592 2.592 0 0 1-2.589-2.589V7.766a2.592 2.592 0 0 1 2.589-2.589H6.8v1.295a1.294 1.294 0 0 0 2.589 0V5.177h5.825v1.295a1.294 1.294 0 0 0 2.589 0V5.177h5.889v1.295a1.294 1.294 0 0 0 2.589 0V5.177h1.683a2.592 2.592 0 0 1 2.589 2.589v7.378a1.294 1.294 0 1 0 2.589 0V7.766a5.183 5.183 0 0 0-5.184-5.177z"
                              />
                              <path
                                data-name="Path 3148"
                                d="M25.305 17.474a7.831 7.831 0 1 0 7.831 7.831 7.84 7.84 0 0 0-7.831-7.831zm0 13.073a5.242 5.242 0 1 1 5.242-5.242 5.248 5.248 0 0 1-5.242 5.242z"
                              />
                              <path
                                data-name="Path 3149"
                                d="M27.181 24.01h-.582v-1.359a1.294 1.294 0 1 0-2.589 0v2.653a1.294 1.294 0 0 0 1.294 1.294h1.877a1.294 1.294 0 0 0 0-2.589z"
                              />
                              <circle
                                data-name="Ellipse 40"
                                cx="1.174"
                                cy="1.174"
                                r="1.174"
                                transform="translate(18.003 12.524)"
                              />
                              <circle
                                data-name="Ellipse 41"
                                cx="1.174"
                                cy="1.174"
                                r="1.174"
                                transform="translate(12.524 18.003)"
                              />
                              <circle
                                data-name="Ellipse 42"
                                cx="1.174"
                                cy="1.174"
                                r="1.174"
                                transform="translate(7.045 12.524)"
                              />
                              <circle
                                data-name="Ellipse 43"
                                cx="1.174"
                                cy="1.174"
                                r="1.174"
                                transform="translate(7.045 18.003)"
                              />
                              <circle
                                data-name="Ellipse 44"
                                cx="1.174"
                                cy="1.174"
                                r="1.174"
                                transform="translate(7.045 23.482)"
                              />
                              <circle
                                data-name="Ellipse 45"
                                cx="1.174"
                                cy="1.174"
                                r="1.174"
                                transform="translate(12.524 23.482)"
                              />
                              <circle
                                data-name="Ellipse 46"
                                cx="1.174"
                                cy="1.174"
                                r="1.174"
                                transform="translate(12.524 12.524)"
                              />
                            </g>
                          </g>
                        </svg>
                      </b-col>
                      <b-col>
                        <div class="date-details">
                          <div class="day">
                            {{ blog.date | moment("dddd") }}
                          </div>
                          <div class="date">
                            {{ blog.date | moment("DD MMMM") }}
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<style scoped>
.blog h3 {
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 15px;
}
.blog .blog-container .blog-image {
  border: 1px solid transparent;
  border-radius: 5px;
  overflow: hidden;
}
.blog .blog-container .blog-image img {
  width: 100%;
  height: 100%;
}

.blog .blog-container .description {
  padding: 22px 15px;
}
.blog .blog-container .description .title {
  text-transform: capitalize;
  font-size: 21px;
  font-weight: 600;
}
.blog .blog-container .description .date-container {
  margin-top: 13px;
}
.blog .blog-container .description .date-container .date-details .day {
  font-size: 15px;
  font-weight: 600;
}
.blog .blog-container .description .date-container .date-details .date {
  font-size: 12px;
  color: #ff8000;
}
</style>

<script>
import blog_1 from "@/assets/Home/blog/blog_1.png";
import blog_2 from "@/assets/Home/blog/blog_2.png";
import blog_3 from "@/assets/Home/blog/blog_3.png";
export default {
  data() {
    return {
      blogs: [
        {
          index: 0,
          image: blog_1,
          title: "blog 2",
          date: "04.03.2023",
        },
        {
          index: 1,
          image: blog_2,
          title: "blog 3",
          date: "05.03.2023",
        },
        {
          index: 2,
          image: blog_3,
          title: "blog 4",
          date: "08.03.2023",
        },
      ],
    };
  },
};
</script>
