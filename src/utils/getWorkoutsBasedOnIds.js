export default function (searching, workouts) {
	return searching.map(workout => workouts.filter(w => w._id == workout._id)[0]);
}