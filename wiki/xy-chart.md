# XY chart

The **`.xychart`**  function allows you to plot 2D line and bar charts in a pure, flexible Quarkdown fashion, through the power of [Mermaid diagrams](mermaid-diagrams.qd).

All parameters, except for `values`, are optional.

| Parameter | Description | Accepts |
| --- | --- | --- |
| `lines` | Whether to draw lines (defaults to true). | [Boolean](boolean.qd) |
| `bars` | Whether to draw bars (defaults to false). | [Boolean](boolean.qd) |
| `x` | Label for the X axis. | String |
| `xrange` | Numerical range for the X axis. Can be open-ended. Incompatible with `xtags`. | [Range](range.qd) |
| `xtags` | Categorical tags for the X axis. Incompatible with `xrange`. | [Iterable](iterable.qd) |
| `y` | Label for the Y axis. | String |
| `yrange` | Range for the Y axis. Can be open-ended. | [Range](range.qd) |
| `caption` | Caption. If present, the chart is [numbered](numbering.qd) as a figure. | String |
| `values` | Y values to plot. | [Iterable](iterable.qd) of points (single line), or iterable of iterables of points (multiple lines) |

## Axis ranges

`xrange` and `yrange` define the boundaries of the visible area of the chart through the usual `x..y` [Range](range.qd) syntax.

The range may also be open on either end, or both:

- If open on the left end, the range starts from the minimum value among the plotted points.
- If open on the right end, the range ends at the maximum value among the plotted points.

For instance, `..` (infinite) is the default range, which shows the area between the minimum and maximum values.

## Possible input sources

### From static list (single line)

You can represent `values` as a Markdown list, just like all iterables.

> **Example 1**
> 
> ```markdown
> .xychart bars:{yes} x:{Months} y:{Revenue} yrange:{100..}
>     - 250
>     - 500
>     - 350
>     - 450
>     - 400
>     - 500
>     - 600
> ```
> 
> ```mermaid
> xychart-beta
> 	x-axis "Months"
> 	y-axis "Revenue" 100 --> 600.0
> 	bar [250.0, 500.0, 350.0, 450.0, 400.0, 500.0, 600.0]
> 	line [250.0, 500.0, 350.0, 450.0, 400.0, 500.0, 600.0]
> ```

### From static list (multiple lines)

In case of nested lists (iterable of iterables), multiple lines will be plotted:

> **Example 2**
> 
> ```markdown
> .xychart x:{Months} y:{Revenue}
>     - - 250
>       - 500
>       - 350
>       - 450
>       - 400
> 
>     - - 400
>       - 150
>       - 200
>       - 400
>       - 450
> ```
> 
> ```mermaid
> xychart-beta
> 	x-axis "Months"
> 	y-axis "Revenue"
> 	line [250.0, 500.0, 350.0, 450.0, 400.0]
> 	line [400.0, 150.0, 200.0, 400.0, 450.0]
> ```

### From iterations

Quarkdown [loops](loops.qd) return an iterable containing the result of each iteration, making them a suitable input for `values`, especially in combination with [math](math.qd) functions.

> **Example 3**
> 
> ```markdown
> .xychart
>     .repeat {100}
>         .1::pow {2}::divide {100}
> 
>     .repeat {100}
>         .1::logn::multiply {10}
> ```
> 
> ```mermaid
> xychart-beta
> 	line [0.0, 6.931471824645996, 10.986123085021973, 13.862943649291992, 16.094379425048828, 17.91759490966797, 19.4591007232666, 20.794414520263672, 21.972246170043945, 23.02585220336914, 23.978954315185547, 24.84906768798828, 25.649492263793945, 26.390573501586914, 27.080501556396484, 27.725887298583984, 28.332134246826172, 28.903717041015625, 29.44438934326172, 29.95732307434082, 30.44522476196289, 30.910425186157227, 31.354942321777344, 31.78053855895996, 32.188758850097656, 32.580963134765625, 32.958370208740234, 33.322044372558594, 33.67295837402344, 34.0119743347168, 34.33987045288086, 34.6573600769043, 34.9650764465332, 35.26360321044922, 35.55348205566406, 35.83518981933594, 36.10917663574219, 36.37586212158203, 36.635616302490234, 36.8887939453125, 37.135719299316406, 37.3766975402832, 37.612003326416016, 37.841896057128906, 38.066627502441406, 38.286415100097656, 38.5014762878418, 38.71200942993164, 38.9182014465332, 39.12023162841797, 39.31825637817383, 39.51243591308594, 39.702919006347656, 39.88983917236328, 40.073333740234375, 40.253517150878906, 40.430511474609375, 40.60443115234375, 40.77537536621094, 40.94344711303711, 41.10873794555664, 41.27134323120117, 41.43134689331055, 41.588829040527344, 41.743873596191406, 41.896549224853516, 42.04692840576172, 42.19507598876953, 42.341064453125, 42.48495101928711, 42.626800537109375, 42.76666259765625, 42.90459442138672, 43.040653228759766, 43.17488098144531, 43.307334899902344, 43.438053131103516, 43.56708908081055, 43.69447708129883, 43.82026672363281, 43.94449234008789, 44.06719207763672, 44.18840408325195, 44.30816650390625, 44.426513671875, 44.54347229003906, 44.659080505371094, 44.77336883544922, 44.8863639831543, 44.99809646606445, 45.10859680175781, 45.21788787841797, 45.32599639892578, 45.43294906616211, 45.53876876831055, 45.64348220825195, 45.747108459472656, 45.84967803955078, 45.95119857788086, 46.05170440673828]
> 	line [0.009999999776482582, 0.03999999910593033, 0.09000000357627869, 0.1599999964237213, 0.25, 0.36000001430511475, 0.49000000953674316, 0.6399999856948853, 0.8100000023841858, 1.0, 1.2100000381469727, 1.440000057220459, 1.690000057220459, 1.9600000381469727, 2.25, 2.559999942779541, 2.890000104904175, 3.240000009536743, 3.609999895095825, 4.0, 4.409999847412109, 4.840000152587891, 5.289999961853027, 5.760000228881836, 6.25, 6.760000228881836, 7.289999961853027, 7.840000152587891, 8.40999984741211, 9.0, 9.609999656677246, 10.239999771118164, 10.890000343322754, 11.5600004196167, 12.25, 12.960000038146973, 13.6899995803833, 14.4399995803833, 15.210000038146973, 16.0, 16.809999465942383, 17.639999389648438, 18.489999771118164, 19.360000610351562, 20.25, 21.15999984741211, 22.09000015258789, 23.040000915527344, 24.010000228881836, 25.0, 26.010000228881836, 27.040000915527344, 28.09000015258789, 29.15999984741211, 30.25, 31.360000610351562, 32.4900016784668, 33.63999938964844, 34.810001373291016, 36.0, 37.209999084472656, 38.439998626708984, 39.689998626708984, 40.959999084472656, 42.25, 43.560001373291016, 44.88999938964844, 46.2400016784668, 47.61000061035156, 49.0, 50.40999984741211, 51.84000015258789, 53.290000915527344, 54.7599983215332, 56.25, 57.7599983215332, 59.290000915527344, 60.84000015258789, 62.40999984741211, 64.0, 65.61000061035156, 67.23999786376953, 68.88999938964844, 70.55999755859375, 72.25, 73.95999908447266, 75.69000244140625, 77.44000244140625, 79.20999908447266, 81.0, 82.80999755859375, 84.63999938964844, 86.48999786376953, 88.36000061035156, 90.25, 92.16000366210938, 94.08999633789062, 96.04000091552734, 98.01000213623047, 100.0]
> ```

### From JSON

[`.json`](data-from-json.qd) loads a JSON file as an iterable when its top-level value is an array, making it a natural input for `.xychart`.

> **Example 4**
> 
> The following `sales.json` is an array of yearly sales entries, each with a `year`, an `a`, and a `b` field:
> 
> ```markdown
> .var {sales} {.json {assets/sales.json}}
> 
> .var {years}
>     .sales::foreach
>         .1::get {year}
> 
> .xychart xtags:{.years} x:{Years} y:{Sales}
>     .sales::foreach
>         .1::get {a}
> 
>     .sales::foreach
>         .1::get {b}
> ```
> 
> ```mermaid
> xychart-beta
> 	x-axis "Years" [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
> 	y-axis "Sales"
> 	line [230.0, 190.0, 180.0, 175.0, 200.0, 250.0, 290.0, 350.0, 470.0]
> 	line [85.0, 100.0, 135.0, 180.0, 240.0, 320.0, 430.0, 580.0, 800.0]
> ```

### From CSV/table

[Table manipulation](table-manipulation.qd) functions such as [`.tablecolumn`](table-manipulation.qd) can extract values from the columns of a table as iterables.

> **Example 5**
> 
> ```markdown
> .xychart
>     .tablecolumn {2}
>         .csv {assets/sales.csv}
> ```
> 
> ```mermaid
> xychart-beta
> 	line [85.0, 100.0, 135.0, 180.0, 240.0, 320.0, 430.0, 580.0, 800.0]
> ```

If you need to access multiple columns from the same table, consider calling `.tablecolumns` for efficiency, which returns a collection of columns. You can then perform any [`Iterable`](iterable.qd) operation on it.

> **Example 6**
> 
> In the following example, the chart displays two lines: one for the second and one for the third column of the CSV. Additionally, the first column of the table is used as a set of categorical tags for the X axis.
> 
> ```markdown
> .var {columns}
>     .tablecolumns
>         .csv {assets/sales.csv}
> 
> .xychart xtags:{.columns::first} x:{Years} y:{Sales}
>     .columns::second
>     .columns::third
> ```
> 
> ```mermaid
> xychart-beta
> 	x-axis "Years" [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
> 	y-axis "Sales"
> 	line [230.0, 190.0, 180.0, 175.0, 200.0, 250.0, 290.0, 350.0, 470.0]
> 	line [85.0, 100.0, 135.0, 180.0, 240.0, 320.0, 430.0, 580.0, 800.0, 0.0]
> ```