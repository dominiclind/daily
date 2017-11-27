export default function (featured, workouts) {
	return featured.map(id => workouts.filter(w => w.id == id)[0]);
}