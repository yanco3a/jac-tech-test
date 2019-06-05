<template>
    <div id="job-board">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Job Board</h4>
            </li>
            <li v-for="job in jobs" v-bind:key="job.id" class="collection-item">
                <div v-if="convertToDays(job.jobOpenDate) >= 0">
                    <div>
                        {{job.jobTitle}} | job opens in <div class="chip">{{ convertToDays(job.jobOpenDate) }} </div> days
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import db from "../components/firebaseInit";
const moment = require('moment')

export default {
    name: 'job-board',
    data: () => {
        return {
            jobs: []
        }
    },
    methods: {
        convertToDays: firestoreTime => {
            const future = moment((firestoreTime).toDate())
            const now = moment();
            return future.diff(now, 'days')
        }
    },
    created () {
        db.collection('Jobs').get().then(snapshot => {
            snapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'jobOpenDate': doc.data().jobOpenDate,
                    'jobTitle': doc.data().jobTitle
                }
                this.jobs.push(data)
            })
        })
    }
}
</script>
