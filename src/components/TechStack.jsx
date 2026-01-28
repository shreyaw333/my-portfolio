import React from 'react';
import '../styles/TechStack.css';

const TechStack = () => {
  const techCategories = [
    {
      category: "Backend & APIs",
      technologies: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
      ]
    },
    {
      category: "Data Engineering & Platforms",
      technologies: [
        { name: "Apache Airflow", icon: "https://airflow.apache.org/docs/apache-airflow/stable/_images/pin_large.png" },
        { name: "Apache Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "Apache Spark", icon: "https://spark.apache.org/images/spark-logo-trademark.png" },
        { name: "Snowflake", icon: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Symbol.png" },
        { name: "BigQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Databricks", icon: "https://asset.brandfetch.io/idD7RfhCFS/idm22HDC6f.png" }
      ]
    },
    {
      category: "ML & AI Infrastructure",
      technologies: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
        { name: "LangChain", icon: "https://python.langchain.com/img/brand/wordmark.png" },
        { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      technologies: [
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    },
    {
      category: "Databases & Caching",
      technologies: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
      ]
    },
    {
      category: "Frontend & Fullstack",
      technologies: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
      ]
    },
    {
      category: "Analytics & Monitoring",
      technologies: [
        { name: "Tableau", icon: "https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png" },
        { name: "Power BI", icon: "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png" },
        { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
        { name: "Prometheus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
        { name: "Looker", icon: "https://seeklogo.com/images/L/looker-logo-B8A6B93D71-seeklogo.com.png" },
        { name: "Splunk", icon: "https://www.splunk.com/content/dam/splunk2/images/icons/favicons/favicon.ico" }
      ]
    }
  ];

  return (
    <section id="techstack" className="section bg-gray-light">
      <div className="section-content">
        <h2 className="section-title left-aligned">
          Tech Stack
        </h2>
        
        <div className="tech-categories-horizontal">
          {techCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="tech-category-row">
              <h3 className="category-title-horizontal">{category.category}</h3>
              <div className="tech-items-horizontal">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-badge">
                    <div className="tech-badge-icon">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    <span className="tech-badge-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;