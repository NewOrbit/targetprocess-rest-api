# targetprocess

TypeScript API wrapper for [Targetprocess](https://www.targetprocess.com/)

## Installation

```
npm install targetprocess-api
```

## Usage

```typescript
import { Targetprocess } from "targetprocess-api";

// initialise the API
const api = new Targetprocess("subdomain", "yourusername", "yourpassword");

// get a user story
const userStory = await getUserStory(123);

// get a task
const task = await getTask(456);

// get a bug
const bug = await getBug(789);

// add a time entry to an entity
const time = await addTime(456, 0.75, 4.25, new Date('2018-09-01'), "Integration testing");
```

## License

Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT Licence](LICENCE)
