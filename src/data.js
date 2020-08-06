

export const CVData = {
    personalData: {
      name: 'Rikki Kendall',
      title: 'Software Developer',
      // image: 'https://bulma.io/images/placeholders/128x128.png',
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQFBztb7_tQF5w/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=rQPnnYPi5O_0sPy7D7U-VGbY7SnCl9AHOBnJbINOc2c',
      contacts: [
        { type: 'email', value: 'kendall.rikki@gmail.com' },
        { type: 'phone', value: '+1(559)326-6408' },
        { type: 'location', value: 'Orlando, FL' },
        { type: 'website', value: 'rikkikendall.me' },
        { type: 'linkedin', value: 'linkedin.com/in/rikki-kendall' },
        { type: 'github', value: 'github.com/rikkikendall' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Profile',
        content: 'My full name is Yuuta Rikki Kendall and I am a software developer and recent Duke Computer Science grad from Sasebo, Japan. I have strong ambitions to grow through challenging myself with new projects and ideas every day',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Computer Science (BS)',
            authority: 'Duke University',
            authorityWebSite: 'https://duke.edu',
            rightSide: '2016 - 2020'
          },
          {
            title: 'High School Diploma',
            authority: 'E.J. King High School - Sasebo, Japan',
            authorityWebSite: 'https://sample.edu',
            rightSide: '2012 - 2016'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        icon: 'archive',
        items: [
          {
            title: 'Junior Dev Ops Intern',
            company: 'WearWorks',
            description: 'Facilitated the development of a MySQL Database and helped transition the relational database to Amazon RDS as well as implementing the Entity/Relationship Diagram for the MySQL Database',
            companyWebSite: 'http://www.wear.works.com',
            companyMeta: '',
            datesBetween: '2020.06 - Present',
            descriptionTags: ['MySQL', 'AWS']
          },
          {
            title: 'Technical Analyst Intern',
            company: 'Office of Naval Intelligence - Suitland, MD',
            description: 'Analyzed scientific intelligence for the Farragut Technical Analysis Center',
            companyWebSite: 'http://somecompanyexample.com',
            datesBetween: '2019.02 - 2019.08',
            descriptionTags: ['Intelligence', 'Technical Analysis']
          },
          {
            title: 'Web Developer/Mobile Developer',
            company: 'Game Tenting Help Center (GTHC) - Durham, NC',
            description: 'Web Developer/Mobile Developer',
            companyWebSite: 'http://someexamplecompany.com',
            datesBetween: '2012.06 - 2012.10',
            descriptionTags: ['React', 'React Native', 'Redux', 'Ruby on Rails']
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projects',
        description: 'Optional',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Duke University Projects',
            description: 'Optional',
            items: [
              { title: 'Game Tenting Help Center', 
              projectUrl: 'www.gthc.io/aboutus', 
              description: 'Pioneered a Duke Krzyzewskiville-Ville Scheduling Application used by students to facilitate tenting.' },
              { title: 'Athlete Brand Network', projectUrl: 'https://master.d2cf12kbv8b7ue.amplifyapp.com/athletes', description: 'Platform to connect NCAA athletes with local businesses for mutual benefit in the form of marketing and sponsorships.' },
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Conferences',
        description: '',
        icon: 'comments',
        items: [
          {
            title: 'Engineers in Action / 2019',
            authority: 'Bridge Builder Conference - CU Boulder',
            authorityWebSite: 'https://www.engineersinaction.com'
          },
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Native'
          },
          {
            authority: 'Japanese',
            authorityMeta: 'Native'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'CSS', 'MySQL', 'Firebase', 'Mongo DB', 'Java']
      },
      {
        type: 'tag-list',
        title: 'Hobbies & Interests',
        icon: 'cubes',
        items: ['Surfing', 'Basketball', 'Tennis']
      }
    ]
  }
  